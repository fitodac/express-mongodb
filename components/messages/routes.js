const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const { 
	addMessage,
	getMessages,
	updateMessage
} = require('./controller')


// GET
router.get('/', (req, res) => {
	getMessages()
		.then(messageList => response.success(req, res, messageList, 200))
		.catch(err => response.error(req, res, 'Error inesperado', 400, err))
})


// POST
router.post('/', (req, res) => {
	addMessage(req.body.user, req.body.message)
		.then( fullMessage => response.success(req, res, fullMessage, 201))
		.catch(err => response.error(req, res, 'Información inválida', 400, err))
})


// PATCH
router.patch('/:id', (req, res) => {
	updateMessage(req.params.id, req.body.message)
		.then(data => response.success(req, res, data, 200))
		.catch(err => response.error(req, res, 'Error interno', 500, err))
})

module.exports = router