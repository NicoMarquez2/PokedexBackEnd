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
    //const types = await Types.findAll()
    //const movements = await Movements.findAll()
    const pokemonMovements = await sequelize.query(
        "SELECT id_pokemon, movement FROM pokemon_movements JOIN pokemons ON pokemon_movements.id_pokemon = pokemons.id JOIN movements ON pokemon_movements.id_movement = movements.id"
    )
    const pokemonTypes = await sequelize.query(
        "SELECT id_pokemon, type FROM pokemon_types JOIN pokemons ON pokemon_types.id_pokemon = pokemons.id JOIN types ON pokemon_types.id_type = types.id"
    )
    res.status(200).send({pokemons, pokemonTypes, pokemonMovements})
})


module.exports = router