const express = require('express')
const messages = require('../components/messages/routes')
const users = require('../components/user/routes')
const chat = require('../components/chat/routes')

function routerApi(app){
	app.use('/message', messages)
	app.use('/user', users)
	app.use('/chat', chat)
}


module.exports = routerApi