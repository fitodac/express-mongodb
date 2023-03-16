const mongoose = require('mongoose')

const Schema = mongoose.Schema

const modelSchema = new Schema({
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	message: {
		type: String,
		required: true
	},
	date: Date,
})

const model = mongoose.model('Message', modelSchema)

module.exports = model