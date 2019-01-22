const User = require("../models/User")

module.exports = {
    show: (req, res) => {
        User.findById(req.params.id)
            .populate({
                path: "post",
                options: { limit: 5, sort: { createdAt: -1}}  
            })
            .then(user => {
                res.render("index", {user})
            })
    },
    new: (req, res) => {
        res.render("user/new")
    },
    create: (req, res) => {
        User.create({
            username: req.body.username,
            password: req.body.password
        }).then(user => {
            res.redirect(`/user/${user._id}`)
        })
    }
}