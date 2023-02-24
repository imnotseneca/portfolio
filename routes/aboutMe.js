const express = require('express')
const router = express.Router()
const aboutMe = require('../controllers/aboutMe.js')

router.get('/', aboutMe.getIndex) 

module.exports = router