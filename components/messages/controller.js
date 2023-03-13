const store = require('./store')

const getMessages = filterUser => {
	return new Promise((resolve, reject) => resolve(store.list(filterUser)))
}


const addMessage = (user, message) => {

	return new Promise(async (resolve, reject) => {

		if( !user || !message ){
			reject()
			return false
		}

		const fullMessage = {
			user,
			message,
			date: new Date()
		}

		await store.add(fullMessage)

		resolve(fullMessage)
	})
}


const updateMessage = (id, message) => {
	return new Promise(async (resolve, reject) => {
		
		if( !id || !message ){
			reject()
			return false
		}
		
		const res = await store.update(id, message)
		resolve(res)
	})
}


module.exports = {
	getMessages,
	addMessage,
	updateMessage
}