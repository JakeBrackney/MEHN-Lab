const User = require("../models/User")
const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
const passport = require('passport')

// GET /
router.get('/', (req, res) => {
    res.render('index')
})

// GET /signup
router.get('/user/signup', (req, res) => {
    res.render('signup', {message: req.flash('signupMessage')})
})

// POST /signup
router.post('/user/signup', (req, res, next) => {
    let signupStrategy = passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/user/signup',
        failureFlash: true
    })

    return signupStrategy(req, res, next)
})

// GET /login
router.get('/login', (req, res) => {
    res.render('login', {message: req.flash('loginMessage')})
})

// POST /login
router.post('/login', (req, res, next) => {
    let loginStrategy = passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
})

return loginStrategy(req, res, next)
})

// GET /logout
router.get('/logout', (req, res) => {
})

// Restricted (cool people only!)
router.get('/secret', (req, res) => {
})

module.exports = router

// module.exports = {
//     show: (req, res) => {
//         User.findById(req.params.id)
//             .populate({
//                 path: "post",
//                 options: { limit: 5, sort: { createdAt: -1}}  
//             })
//             .then(user => {
//                 res.render("user/signup", { user })
//             })
//     },
//     new: (req, res) => {
//         res.render("user/signup")
//     },
//     create: (req, res) => {
//         User.create({
//             username: req.body.username,
//             password: req.body.password
//         }).then(user => {
//             res.redirect(`/user/${user._id}`)
//         })
//     }
// }
