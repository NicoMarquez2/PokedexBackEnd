const express = require('express');
const { sequelize } = require('../models');
const router = express.Router();
const models = require('../models')
const Pokemon = models.Pokemons
const Types  = models.types
const Movements  = models.movements
const PokemonMovements = models.pokemonMovements
const PokemonTypes = models.pokemonTypes

router.get('/', async (req, res) => {
    const pokemons = await Pokemon.findAll()
    const types = await Types.findAll()
    const movements = await Movements.findAll()
    const pokemonMovements = await sequelize.query(
        "SELECT * FROM movements JOIN Pokemons ON movements.idPokemon = Pokemons.id"
    )
    const pokemonTypes = await PokemonTypes.findAll()
    res.status(200).send({pokemons, types, movements, pokemonMovements, pokemonTypes})
})


module.exports = router