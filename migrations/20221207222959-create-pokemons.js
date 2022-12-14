'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pokemons', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      height: {
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.STRING
      },
      hp: {
        type: Sequelize.INTEGER
      },
      atk: {
        type: Sequelize.INTEGER
      },
      def: {
        type: Sequelize.INTEGER
      },
      satk: {
        type: Sequelize.INTEGER
      },
      sdef: {
        type: Sequelize.INTEGER
      },
      spd: {
        type: Sequelize.INTEGER
      },
      created_by: {
        allowNull: true,
        references: { model: 'users', key: 'id' },
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
    await queryInterface.dropTable('pokemons');
  }
};