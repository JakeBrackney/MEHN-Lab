const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/hackernews", { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose

