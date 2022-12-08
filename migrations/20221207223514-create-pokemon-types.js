'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pokemon_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: Sequelize.INTEGER
      },
      id_pokemon: {
        primaryKey: true,
        references: { model: 'pokemons', key: 'id' },
        type: Sequelize.INTEGER
      },
      id_type: {
        primaryKey: true,
        references: { model: 'types', key: 'id' },
        type: Sequelize.INTEGER
      },
      createdAt:{
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt:{
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pokemon_types');
  }
};