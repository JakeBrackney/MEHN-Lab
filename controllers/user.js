
const User = require("../models/User")
const passport = require("passport");



module.exports = {
    index: (req,res) => {
        User.find({})
        .then(user => {
            res.render('user/signup', { user })
        })
    },
    login: (req, res) => {
        res.render("user/login", { message: req.flash("loginMessage") });
      },
    show: (req, res) => {
        User.findById(req.params.id)
            .populate({
                path: "post",
                options: { limit: 5, sort: { createdAt: -1}}  
            })
            .then(user => {
                res.render("user/signup", { user })
            })
    },
    new: (req, res) => {
        res.render("user/signup", { user })
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
