const express = require('express')
const bodyParser = require('body-parser')
const MovieController = require('./controllers/movie-controller')
const UserController = require('./controllers/user-controller')
const middleware = require('./middlewares/checkAuthUser')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

const db = require('./models/db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ }))


app.listen(process.env.PORT, ()=> {
    console.log('Server is runing successfully ...')
})


app.get('/', middleware.checkAuthUser, MovieController.getAllMovie)
app.post('/register', UserController.register)
