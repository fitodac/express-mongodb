const express = require('express')
const multer = require('multer')

const router = express.Router()
const response = require('../../network/response')

const { 
	addMessage,
	getMessages,
	updateMessage,
	deleteMessage
} = require('./controller')

const upload = multer({
    dest: 'public/files/'
})

// GET
router.get('/', (req, res) => {
	const filterMessages = req.query.user || null
	getMessages(filterMessages)
		.then(messageList => response.success(req, res, messageList, 200))
		.catch(err => response.error(req, res, 'Error inesperado', 400, err))
})


// POST
router.post('/', upload.single('file'), (req, res) => {
	addMessage(req.body.chat, req.body.user, req.body.message, req.file)
		.then( fullMessage => response.success(req, res, fullMessage, 201))
		.catch(err => response.error(req, res, 'Información inválida', 400, err))
})


// PATCH
router.patch('/:id', (req, res) => {
	updateMessage(req.params.id, req.body.message)
		.then(data => response.success(req, res, data, 200))
		.catch(err => response.error(req, res, 'Error interno', 500, err))
})


// DELETE
router.delete('/:id', (req, res) => {
	deleteMessage(req.params.id)
		.then(() => response.success(req, res, `El mensaje ${req.params.id} ha sido eliminado`, 200))
		.catch(err => response.error(req, res, 'Error interno', 500, err))
})



module.exports = router