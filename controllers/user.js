const express = require('express')
const User = require("../models/User")
const passport = require("passport");
var router = express.Router();

router.post('/signup', (req, res) => {
    let signupStrategy = passport.authenticate('local-signup', {
        successRedirect : '/',
        failureRedirect : '/signup',
        failureFlash : true
    });
    return signupStrategy(req, res)
})



module.exports = {
    index: (req,res) => {
        User.find({})
        .then(user => {
            res.render('user/signup', { user })
        })
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
        res.render("user/signup")
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
