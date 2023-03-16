const express = require('express')
const message_routes = require('../components/messages/routes')
const user_routes = require('../components/user/routes')

function routerApi(app){
	app.use('/message', message_routes)
	app.use('/user', user_routes)
}


module.exports = routerApi