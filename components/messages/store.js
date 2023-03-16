const Model = require('./model')


const addMessage = message => {
	const msj = new Model(message)
	msj.save()
}

const getMessages = async filterUser => {
	try {
		let filter = filterUser ? { user: filterUser } : {}
		const resp = await Model.find(filter)
												.populate('user')
												.exec()
		return resp

	} catch (error) {
		console.log(error)
	}
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