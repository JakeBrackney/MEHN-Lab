const express = require('express')
const hbs = require("hbs");
const bodyParser = require('body-parser')
const app = express()
const passport = require('passport')
require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())
// const mongoose = require('mongoose') - Zakk said not needed here

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