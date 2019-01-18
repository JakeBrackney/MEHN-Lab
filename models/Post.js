const mongoose = require('../db/connection.js')
require('mongoose-type-url')
const Schema = mongoose.Schema

// const postOne = new Schema ({
//     title: String,
//     url: {
        
//     }
// })

const Post = new mongoose.Schema ({
    title: String,
    url: {
        link: mongoose.SchemaTypes.Url
    },
    text: String
})

module.exports = mongoose.model({ Post })