const express = require('express');
const router = express.Router();
const homepage = require('../controllers/application')

router.get('/', homepage.index)

module.exports = router;