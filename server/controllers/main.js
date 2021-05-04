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
        newRecipe.save().then(() => {
            res.send({error: false})
        }).catch(e => {
            res.send({error: true, message: e})
        })

    }
}