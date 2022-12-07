'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pokemonMovements',[{
      idPokemon:1,
      idMovement:1,
    },
    {
      idPokemon:1,
      idMovement:10,
    },
    {
      idPokemon:4,
      idMovement:4,
    },
    {
      idPokemon:4,
      idMovement:6,
    },
    {
      idPokemon:7,
      idMovement:4,
    },
    {
      idPokemon:7,
      idMovement:7,
    },
    {
      idPokemon:12,
      idMovement:1,
    },
    {
      idPokemon:12,
      idMovement:3,
    },
    {
      idPokemon:25,
      idMovement:4,
    },
    {
      idPokemon:25,
      idMovement:8,
    },
    {
      idPokemon:92,
      idMovement:6,
    },
    {
      idPokemon:92,
      idMovement:7,
    },
    {
      idPokemon:132,
      idMovement:5,
    },
    {
      idPokemon:144,
      idMovement:1,
    },
    {
      idPokemon:144,
      idMovement:3,
    },
    {
      idPokemon:151,
      idMovement:2,
    },
    {
      idPokemon:151,
      idMovement:4,
    },])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pokemonMovements', null, {});    
  }
};
