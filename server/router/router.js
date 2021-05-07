const express = require('express')
const router = express.Router()
const valid = require('../middleware/validator')
const create = require('../controllers/main')


router.post("/food", valid.check, create.upload)
router.post('/makeReview', create.makeReview)
router.get("/foodgallery", create.foodGallery)
router.get('/singleRecipe/:id', create.getSingleRecipe)
router.get('/favorite/:id', create.favorite)
router.get('/getfavorites', create.getfavorites)




module.exports = router