const mongoose = require('mongoose')

const Schema = mongoose.Schema

const modelSchema = new Schema({
	chat: {
		type: Schema.ObjectId,
		ref: 'Chat',
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	message: {
		type: String,
		required: true
	},
	date: Date,
	file: String
})

const model = mongoose.model('Message', modelSchema)

module.exports = model