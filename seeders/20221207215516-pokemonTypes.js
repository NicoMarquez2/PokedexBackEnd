'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pokemon_types',[{
      id_pokemon:1,
      id_type:15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:1,
      id_type:17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:4,
      id_type:17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:7,
      id_type:8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:12,
      id_type:14,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:12,
      id_type:18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:25,
      id_type:9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:92,
      id_type:11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:92,
      id_type:17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:132,
      id_type:12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:144,
      id_type:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:144,
      id_type:18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:151,
      id_type:10,
      createdAt: new Date(),
      updatedAt: new Date()
    },])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pokemon_types', null, {});   
  }
};
