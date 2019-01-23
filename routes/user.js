const express = require("express")
const router = express.Router
const passport = require('passport')
const userController = require("../controllers/user")

router.post("/", userController.create)
router.get("/new", userController.new)
router.get("/:id", userController.show)
router.put("/:id", userController.update)

module.exports = router

// GET /
// router.get('/', (req, res) => {
//     res.render('index')
// })

// // GET /signup
// router.get('user/signup', (req, res) => {
//     res.render('user/signup', {message: req.flash('signupMessage')})
// })

// // POST /signup
// router.post('user/signup', (req, res, next) => {
//     let signupStrategy = passport.authenticate('local-signup', {
//         successRedirect: '/',
//         failureRedirect: 'user/signup',
//         failureFlash: true
//     })

//     return signupStrategy(req, res, next)
// })

// // GET /login
// router.get('user/login', (req, res) => {
//     res.render('user/login', {message: req.flash('loginMessage')})
// })

// // POST /login
// router.post('user/login', (req, res, next) => {
//     let loginStrategy = passport.authenticate('local-login', {
//         successRedirect: '/',
//         failureRedirect: 'user/login',
//         failureFlash: true
// })

// return loginStrategy(req, res, next)
// })

// // GET /logout
// router.get('/logout', (req, res) => {
// })

// // Restricted (cool people only!)
// router.get('/secret', (req, res) => {
// })

// module.exports = router