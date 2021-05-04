const express = require('express')
const router = express.Router()
const valid = require('../middleware/validator')
const create = require('../controllers/main')


router.post("/food", valid.check, create.upload)




module.exports = router