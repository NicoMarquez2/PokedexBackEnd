const express = require('express');
const { sequelize } = require('../models');
const router = express.Router();
const models = require('../models')
const Pokemon = models.pokemons
const Types  = models.types
const Movements  = models.movements
const PokemonMovements = models.pokemon_movements
const PokemonTypes = models.pokemon_types

router.get('/', async (req, res) => {
    const pokemons = await Pokemon.findAll()
    const types = await Types.findAll()
    const movements = await Movements.findAll()
    const pokemonMovements = await sequelize.query(
        "SELECT * FROM pokemon_movements JOIN pokemons ON pokemon_movements.id_pokemon = pokemons.id"
    )
    const pokemonTypes = await PokemonTypes.findAll()
    res.status(200).send({pokemons, types, movements, pokemonMovements, pokemonTypes})
})


module.exports = router