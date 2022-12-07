'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pokemonTypes',[{
      idPokemon:1,
      idType:15,
    },
    {
      idPokemon:1,
      idType:17,
    },
    {
      idPokemon:4,
      idType:17,
    },
    {
      idPokemon:7,
      idType:8,
    },
    {
      idPokemon:12,
      idType:14,
    },
    {
      idPokemon:12,
      idType:18,
    },
    {
      idPokemon:25,
      idType:9,
    },
    {
      idPokemon:92,
      idType:11,
    },
    {
      idPokemon:92,
      idType:17,
    },
    {
      idPokemon:132,
      idType:12,
    },
    {
      idPokemon:144,
      idType:1,
    },
    {
      idPokemon:144,
      idType:18,
    },
    {
      idPokemon:151,
      idType:10,
    },])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pokemonTypes', null, {});   
  }
};
