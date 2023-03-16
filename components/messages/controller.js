const store = require('./store')

const getMessages = filterUser => {
	return new Promise((resolve, reject) => resolve(store.list(filterUser)))
}


const addMessage = (chat, user, message, file) => 
	new Promise(async (resolve, reject) => {

		if( !chat || !user || !message ){
			console.error('[messageController] No hay chat usuario o mensaje');
			reject('Los datos son incorrectos');
			return false
		}

		let fileUrl = ''
		if (file) {
			fileUrl = 'http://localhost:3000/app/files/' + file.filename;
		}

		const fullMessage = {
			chat,
			user,
			message,
			date: new Date(),
			file: fileUrl
		}

		store.add(fullMessage)

		resolve(fullMessage)
	}
)



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