const mongoose = require('mongoose')



const db = mongoose.connect('mongodb://127.0.0.1:27017/movies').then(() => {
    console.log('Succeefully connected')
}).catch(err => {
    console.error(err)
})


module.exports = db

