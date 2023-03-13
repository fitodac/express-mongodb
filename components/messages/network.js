const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const { 
	addMessage,
	getMessages
} = require('./controller')



router.get('/', (req, res) => {
	getMessages()
		.then(messageList => response.success(req, res, messageList, 200))
		.catch(err => response.error(req, res, 'Error inesperado', 400, err))
})



router.post('/', (req, res) => {
	addMessage(req.body.user, req.body.message)
		.then( fullMessage => response.success(req, res, fullMessage, 201))
		.catch(err => response.error(req, res, 'Información inválida', 400, err))
})


module.exports = router