const express = require('express')
const message = require('../components/messages/network')

function routerApi(app){
	app.use('/message', message)
}


module.exports = routerApi