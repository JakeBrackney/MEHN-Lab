// const {Post} = require("../models/Post")
const Post = require("../models/Post")

module.exports = {
    index: (req, res) => {
        Post.find({}).then(posts => {
            console.log(posts)
            res.render( "index", { posts });
        })
    }
};