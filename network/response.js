let success = (req, res, message, status, details) => {
	res.status(status || 200).json({
		error: '',
		body: message
	})
}
let error = (req, res, message, status, details) => {
	console.log(details)

	res.status(status || 500).json({
		error: message,
		body: ''   
	})

}



module.exports = {
	success,
	error
}