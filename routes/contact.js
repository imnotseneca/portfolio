const express = require('express')
const router = express.Router()
const contactRoutes = require('../controllers/contact')

router.get('/', contactRoutes.getIndex) 
router.post('/', contactRoutes.getFormData)
router.get('/success', contactRoutes.getSuccess)

module.exports = router