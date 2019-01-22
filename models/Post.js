const mongoose = require('../db/connection')
require('mongoose-type-url')
const Schema = mongoose.Schema

// const postOne = new Schema ({
//     title: String,
//     url: {
        
//     }
// })

const Post = new Schema ({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
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

module.exports = mongoose.model("Post", Post)


// db.post.insert(
//     {
//         "title": "For the Love of Pipes",
//         "url": {
//             "link": "https://blog.jessfraz.com/post/for-the-love-of-pipes/"
//         },
//         "text": "this is an article?",
//     }
// )