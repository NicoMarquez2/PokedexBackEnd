const express = require('express');
require('dotenv').config();
const cors = require('cors')
const pokemon = require('./controllers/pokemon')
const app = express();
const login = require('./controllers/login')

const port = 8080

app.use(express.json())
app.use(cors())


app.use('/pokemon',pokemon)
app.use('/login',login)



app.listen(port, () => {
    console.log('Services are running...')
})