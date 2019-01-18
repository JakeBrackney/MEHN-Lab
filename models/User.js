const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const User = new Schema ({
    username: String,
    password: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

module.exports = mongoose.model({ User })