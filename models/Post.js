const mongoose = require('../db/connection')
require('mongoose-type-url')
const Schema = mongoose.Schema


const Post = new Schema ({
    title: String,
    url: {
        link: mongoose.SchemaTypes.Url
    },
    text: String,
    createdAt: {
        type: Date,
        default: Date.now()
      }
},{collection: 'posts'})

module.exports = mongoose.model("Posts", Post)
