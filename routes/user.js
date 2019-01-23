const express = require("express")
const router = express.Router()
const passport = require('passport')
const userController = require("../controllers/user")

router.get('/login', userController.login);
router.post('/login', userController.createLogin);
router.get('/sign-up', userController.signUp);
router.post('/sign-up', userController.createSignUp);
router.get('/logout', userController.logout);
router.get('/:id', userController.show);


router.post('/signup', (req, res) => {
    let signupStrategy = passport.authenticate('local-signup', {
        successRedirect : '/',
        failureRedirect : '/signup',
        failureFlash : true
    });
    return signupStrategy(req, res)
})

module.exports = router