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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pokemonTypes');
  }
};