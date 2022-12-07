const express = require('express')
const router = express.Router();
const models = require('../models')
const  Pokemon = models.Pokemons
const { Types } = require('../models/pokemontypes')
const { Movements } = require('../models/pokemonmovements')


router.get('/', async (req, res) => {
    const pokemons = await Pokemon.findAll()
    const types = await Types.findAll()
    const movements = await Movements.findAll()
    res.status(200).send({pokemons, types, movements})
})


module.exports = router