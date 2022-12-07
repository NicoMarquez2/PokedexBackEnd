'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pokemonMovements',[{
      idPokemon:1,
      idMovement:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:1,
      idMovement:10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:4,
      idMovement:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:4,
      idMovement:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:7,
      idMovement:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:7,
      idMovement:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:12,
      idMovement:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:12,
      idMovement:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:25,
      idMovement:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:25,
      idMovement:8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:92,
      idMovement:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:92,
      idMovement:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:132,
      idMovement:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:144,
      idMovement:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:144,
      idMovement:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:151,
      idMovement:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:151,
      idMovement:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pokemonMovements', null, {});    
  }
};
