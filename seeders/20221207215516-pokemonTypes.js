'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pokemonTypes',[{
      idPokemon:1,
      idType:15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:1,
      idType:17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:4,
      idType:17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:7,
      idType:8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:12,
      idType:14,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:12,
      idType:18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:25,
      idType:9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:92,
      idType:11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:92,
      idType:17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:132,
      idType:12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:144,
      idType:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:144,
      idType:18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idPokemon:151,
      idType:10,
      createdAt: new Date(),
      updatedAt: new Date()
    },])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pokemonTypes', null, {});   
  }
};
