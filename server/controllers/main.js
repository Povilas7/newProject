const foodDb = require('../schema/schema')

module.exports = {
    upload: (req, res) => {
        let {image, ingredients, preparation} = req.body
        let images = []
        image.map(item => {
            images.push(item)
        })
        let ingred = []
        ingredients.map(item => {
            ingred.push(item)
        })
        let prepar = []
        preparation.map(item => {
            prepar.push(item)
        })

        let newRecipe = new foodDb
        newRecipe.title = req.body.title
        newRecipe.image = images
        newRecipe.ingredients = ingred
        newRecipe.preparation = prepar
        newRecipe.reviews = []
        newRecipe.favorite = false
        newRecipe.save().then(() => {
            res.send({error: false})
        }).catch(e => {
            res.send({error: true, message: e})
        })

    },
    foodGallery: async (req, res) => {
        let recipeList = await foodDb.find()
        res.send({rec: recipeList})
    },
    getSingleRecipe: async (req, res) => {
        const recipe = await foodDb.find({_id: req.params.id})
        res.send({success: true, rec: recipe})
    },
    makeReview: async (req, res) => {
        const {id, email, points, review} = req.body
        const rew = {
            email,
            points,
            review
        }
        const updated = await foodDb.findOneAndUpdate({_id: id}, {$push: {reviews: rew}}, {new: true})
        res.send({success: true, recipe: updated})
    },
    favorite: async (req, res) => {
        const {id} = req.params
        const recipe = await foodDb.findOne({_id: id})
        const updated = await foodDb.findOneAndUpdate({_id: id}, {$set: {favorite: !recipe.favorite}}, {new: true})
        res.send({success: true, recipe: updated})
    },
    getfavorites: async (req, res) => {
        const recipes = await foodDb.find({favorite: true})
        res.send({success: true, rec: recipes})
    },
}