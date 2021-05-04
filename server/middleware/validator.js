
module.exports = {
    check: (req, res, next) => {
        console.log(req.body)
        let {title, image, ingredients, preparation} = req.body
        function error(status, msg){
            return res.send({error:status, message: msg})
        }
        if(title.length < 5){
            return error(true, 'Title is to short')
        }
        if(image.length < 1){
            return error(true, 'Image not found')
        }
        if(ingredients.length < 1){
            return error(true, 'Add ingredients')
        }
        if(preparation.length < 1){
            return error(true, 'Add preparation')
        }
        next()
    }
}