const User = require('../models/user-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { registerValidation } = require('../utils/validator')


const saltRounds = 10;


const register = async (req, res) => {
    // Check if the req.body valid or not
    const { email, password }  = req.body 
    const errors = registerValidation({ email, password })

    if(errors) {
        return res.status(400).json({ errors })
    }

    // Check if the email is already exists 
    const oldUser = await User.findOne({ email })

    if(oldUser) {
        return res.status(409).json({ error: 'User is already exists'})
    }

    res.status(200).json({message: 'success'})

    // hash password

    bcrypt.hash(password, saltRounds, async function(err, hash) {
        // Store hash in your password DB.
        console.log(err, hash)
        if(err) {
            return res.status(403).json({ error: 'please try another passowrd'})
        }

        const newUSer = { email, password:  hash }

        const dbUser = await User.create(newUSer)

        const token = jwt.sign({
            exp: 60,
            data: dbUser
          }, 'secret');

          console.log(token)

          return res.status(200).json({ token })

    });
}

module.exports = { register}