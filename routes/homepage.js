const express = require('express');
const router = express.Router();
const homepage = require('./controllers/homepage.js')

router.get('/', homepage.index)

module.exports = router;