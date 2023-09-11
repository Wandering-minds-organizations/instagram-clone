const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
    // TODO add more fields
})

const User = mongoose.model('User', UserSchema)

module.exports = User