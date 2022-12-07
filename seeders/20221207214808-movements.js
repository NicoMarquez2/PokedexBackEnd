'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movements', [{
      movement: 'Razor-wind' //1
    },
    {
      movement:'Pound' //2
    },
    {
      movement:'Gust' //3
    },
    {
      movement:'Mega-punch' //4
    },
    {
      movement:'Transform' //5
    },
    {
      movement:'Fire-punch' //6
    },
    {
      movement:'Ice-punch' //7
    },
    {
      movement:'Pay-day' //8
    },
    {
      movement:'Razor-wind' //9
    },
    {
      movement:'Swords-dance' //10
    }], {});
    },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('movements', null, {});
  }
};
