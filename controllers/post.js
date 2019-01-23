const Post = require('../models/post')
// const Comment = require('../models/Comment')

module.exports = {
    show: (req, res) => {
    Post.findOne({_id: req.params.id})
    .populate("content")
},
    new: (req, res) => {

    },
    create: (req, res) => {

    },
    delete: (req, res) => {}
}

// new display the form
//create receive the data from form as post request