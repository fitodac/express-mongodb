const Model = require('./model')


const addMessage = message => {
	const msj = new Model(message)
	msj.save()
}

const getMessages = async filterUser => {
	let filter = filterUser ? { user: filterUser } : {}
	const messages = await Model.find(filter)
	return messages
}


const updateMessage = async (id, message) => {
	const msj = await Model.findById({
		_id: id
	})

	msj.message = message

	const newMsj = await msj.save()
	return newMsj
}


const removeMessage = async id => {
	await Model.deleteOne({ _id: id })
}


module.exports = {
	add: addMessage,
	list: getMessages,
	update: updateMessage,
	remove: removeMessage
}