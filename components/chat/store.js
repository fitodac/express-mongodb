const Model = require('./model')

function addChat(chat) {
    const myChat = new Model(chat)
    return myChat.save()
}

async function listChats(userId) {
	let filter = {}
	if (userId) {
		filter = {
			users: userId
		}
	}

	const resp = await Model.find(filter)
		.populate('users')
		.exec()
	
	return resp
}

module.exports = {
    add: addChat,
    list: listChats,
}