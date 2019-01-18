const express = require('express')
const hbs = require("hbs");
const bodyParser = require('body-parser')
const app = express()

// app.get('/', (request, response) => {
// 	response.send("Hello World")
// })

// app.use(require("./routes/homepage.js"));

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(require("./routes/index.js"));

app.listen(4000, () => {
	console.log('You are listening on 4000')
})