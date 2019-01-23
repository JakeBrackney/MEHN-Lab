const Post = require('../models/post')
// const Comment = require('../models/Comment')

module.exports = {
    show: (req, res) => {
    Post.findOne({_id: req.params.id})
    .populate("content")
},
    new: (req, res) => {
        res.render("post/new")
    },
    create: (req, res) => {
        Post.create ({
            title: req.body.post.text,
            url: req.body.post.link
        }).then(obj => {
            req.user.post.push(obj)
            req.user.save(err => {
                res.redirect(`/post/${post._id}`)
            })
        })
    },
    delete: (req, res) => {}
}

// new display the form
//create receive the data from form as post request