const db = require('mongoose')
require('dotenv').config()

db.Promise = global.Promise


const connect = async () => {
	await db.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.pgzd4ro.mongodb.net/?retryWrites=true&w=majority`, {
		useNewUrlParser: true,
	})

	console.log('[db] conectada con éxito')
}

module.exports = connect