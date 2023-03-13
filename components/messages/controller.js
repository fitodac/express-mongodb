const store = require('./store')

const getMessages = filterUser => {
	return new Promise((resolve, reject) => resolve(store.list(filterUser)))
}


const addMessage = (user, message) => new Promise(async (resolve, reject) => {

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



const updateMessage = (id, message) => new Promise(async (resolve, reject) => {
		
	if( !id || !message ){
		reject()
		return false
	}
	
	const res = await store.update(id, message)
	resolve(res)
})



const deleteMessage = id => new Promise((resolve, reject) => {
	if( !id ){
		reject('ID inválido')
		return false
	}

	store.remove(id)
		.catch(err => reject(err))
		.then(() => resolve())
})



module.exports = {
	getMessages,
	addMessage,
	updateMessage,
	deleteMessage
}