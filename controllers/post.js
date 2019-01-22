const Post = require('../models/post')
// const Comment = require('../models/Comment')

// module.exports = {
// 	show: (req, res) => {
// 		console.log(req.body)
// 		Post.findOne({ _id: req.params.id })
// 			.then
// 	}
// }


module.exports = {
    show: (req, res) => {
Post.findOne({_id: req.params.id})
    .populate("title")
}
}