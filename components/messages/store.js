const db = require('mongoose')
const Model = require('./model')
require('dotenv').config()

db.Promise = global.Promise
db.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.pgzd4ro.mongodb.net/?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
})

console.log('[db] conectada con éxito')


const addMessage = message => {
	const msj = new Model(message)
	msj.save()
}

const getMessages = async () => await Model.find()


module.exports = {
	add: addMessage,
	list: getMessages
}