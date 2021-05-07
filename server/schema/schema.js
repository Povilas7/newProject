const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const userSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    preparation: {
        type: Array,
        required: true
    },
    reviews: {
        type: Array,
        required: true
    },
    favorite: {
        type: Boolean,
        required: true
    }
})

const food = mongoose.model("foodRecipe", userSchema)

module.exports = food