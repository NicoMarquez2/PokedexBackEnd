'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pokemon_movements',[{
      id_pokemon:1,
      id_movement:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:1,
      id_movement:10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:4,
      id_movement:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:4,
      id_movement:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:7,
      id_movement:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:7,
      id_movement:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:12,
      id_movement:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:12,
      id_movement:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:25,
      id_movement:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:25,
      id_movement:8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:92,
      id_movement:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:92,
      id_movement:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:132,
      id_movement:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:144,
      id_movement:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:144,
      id_movement:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:151,
      id_movement:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_pokemon:151,
      id_movement:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pokemon_movements', null, {});    
  }
};
