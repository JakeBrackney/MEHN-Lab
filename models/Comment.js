const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Comment = new Schema({
    text: String,
    createdAt: {
        type: Date,
        default: Date.now()
      }
})


module.exports = mongoose.model({ Comment })