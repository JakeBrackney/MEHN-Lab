const express = require('express')
const app = express()
const hbs = require("hbs");


// app.get('/', (request, response) => {
// 	response.send("Hello World")
// })

app.use(require("./routes/homepage.js"));

app.listen(4000, () => {
	console.log('You are listening on 4000')
})