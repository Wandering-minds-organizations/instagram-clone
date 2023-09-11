const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const db = mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.lhxpbih.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('Succeefully connected')
}).catch(err => {
    console.error(err)
})

module.exports = db


