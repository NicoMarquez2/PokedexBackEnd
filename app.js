const express = require('express');
require('dotenv').config();
const cors = require('cors')
const pokemon = require('./controllers/pokemon')
const app = express();
const login = require('./controllers/login');
const register = require('./controllers/register')

const port = 8080

app.use(express.json())
//app.use(cors())
app.use(cors({origin: 'http://localhost:3000'}))
/*var corsOptions = {
    origin: 'http://localhost:8080/pokemon',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }*/

app.use('/pokemon',pokemon)
app.use('/login',login)
app.use('/register',register)





app.listen(port, () => {
    console.log('Services are running...')
})