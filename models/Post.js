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
    text: String,
    createdAt: {
        type: Date,
        default: Date.now()
      }
})

module.exports = mongoose.model({ Post })


db.post.insert(
    {
        "title": "For the Love of Pipes",
        "url": {
            "link": "https://blog.jessfraz.com/post/for-the-love-of-pipes/"
        },
        "text": "this is an article?",
    }
)