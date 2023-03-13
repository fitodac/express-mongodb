const express = require('express')
const multer = require('multer')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const port = 3000
const upload = multer()
const db = require('./db')
const routerApi = require('./network/routes')

db()

app.use(express.json()) // Middleware
routerApi(app)



app.use('/', express.static(`${__dirname}/public`))


app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})