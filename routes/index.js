const express = require('express')
const router = express.Router()

router.use('/', require("./application.js"))
router.use('/user', require('./user'))
router.use('/post', require('./post'))

//create postcontroller

module.exports = router;