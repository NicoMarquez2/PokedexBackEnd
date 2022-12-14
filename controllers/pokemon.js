const express = require('express');
const { sequelize } = require('../models');
const router = express.Router();
const models = require('../models')
const { Op } = require("sequelize");
const Pokemon = models.pokemons
const Types  = models.types
const Movements  = models.movements
const PokemonMovements = models.pokemon_movements
const PokemonTypes = models.pokemon_types

async function createIdToNewPokemon(){
    const maxId = await Pokemon.max('id');

    console.log(maxId)
    return maxId + 1
}

async function getMovementId(movement){
    if(Array.isArray(movement)){
        const getMovements = await Movements.findAll({
            where: {
                movement:{
                    [Op.or]: [movement[0], movement[1]]
                }
            }
        })

        const movementsId = [getMovements[0].dataValues.id, getMovements[1].dataValues.id]

        return(movementsId)
    } else {
        const getMovement = await Movements.findAll({
            where:{
                movement: movement
            }
        })
        return (getMovement)
    }    
}

async function getTypeId(type){
    if(Array.isArray(type)){
        const getTypes = await Types.findAll({
            where: {
                type:{
                    [Op.or]: [type[0], type[1]]
                }
            }
        })

        const typesId = [getTypes[0].dataValues.id, getTypes[1].dataValues.id]

        return(typesId)
    } else {
        const getType = await Types.findAll({
            where:{
                type: type
            }
        })
        return (getType[0].dataValues.id)
    }    
}

router.get('/', async (req, res) => {
    const pokemons = await Pokemon.findAll()
    const pokemonMovements = await sequelize.query(
        "SELECT id_pokemon, movement FROM pokemon_movements JOIN pokemons ON pokemon_movements.id_pokemon = pokemons.id JOIN movements ON pokemon_movements.id_movement = movements.id"
    )
    const pokemonTypes = await sequelize.query(
        "SELECT id_pokemon, type FROM pokemon_types JOIN pokemons ON pokemon_types.id_pokemon = pokemons.id JOIN types ON pokemon_types.id_type = types.id"
    )
    res.status(200).send({pokemons, pokemonTypes, pokemonMovements})
})

router.post('/', async (req, res) => {
    const userId = req.get("userId")
    
    const pokemon = req.body.pokemon
    const types = req.body.types
    const movements = req.body.movements

    const pokemonId = await createIdToNewPokemon()
    pokemon['id'] = pokemonId

    const typeId = await getTypeId(types.type)

    const movementId = await getMovementId(movements.movement)
    
    /*if(Array.isArray(typeId)){
        await PokemonTypes.create({id_pokemon: `${pokemonId}`, id_type: `${typeId[0]}`})
        await PokemonTypes.create({id_pokemon: `${pokemonId}`, id_type: `${typeId[1]}`})
    } else {
        await PokemonTypes.create({id_pokemon: `${pokemonId}`, id_type: `${typeId}`})
    }*/

    //await Pokemon.create({pokemon})
    res.send({pokemon,types,movements})
})


module.exports = router