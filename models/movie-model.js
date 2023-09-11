const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    name: String,
    rate: Number,
    description: String
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie