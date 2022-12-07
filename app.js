const express = require('express');
require('dotenv').config();
const cors = require('cors')
const pokemon = require('./controllers/pokemon')
const app = express();

const port = 8080

app.use(express.json())
app.use(cors())


app.use('/pokemon',pokemon)


app.listen(port, () => {
    console.log('Services are running...')
})