'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movements', [{
      movement: 'Razor-wind',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movement:'Pound',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movement:'Gust',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movement:'Mega-punch',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movement:'Transform',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movement:'Fire-punch',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movement:'Ice-punch',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movement:'Pay-day',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movement:'Swords-dance',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('movements', null, {});
  }
};
