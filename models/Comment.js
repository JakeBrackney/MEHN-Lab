const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Comment = new Schema({
    text: String,
})


module.exports = mongoose.model({ Comment })