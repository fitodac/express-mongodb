const express = require('express')
const message_routes = require('../components/messages/routes')

function routerApi(app){
	app.use('/message', message_routes)
}


module.exports = routerApi