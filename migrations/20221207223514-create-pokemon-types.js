'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pokemonTypes', {
      idPokemon: {
        primaryKey: true,
        references: { model: 'Pokemons', key: 'id' },
        type: Sequelize.INTEGER
      },
      idType: {
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
    await queryInterface.dropTable('pokemonTypes');
  }
};