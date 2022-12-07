'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name:'Nicolás Márquez',
      email:'nicolasmarquez@gmail.com',
      password:'contraseña',
    },
    {
      name:'Guido Cabrera',
      email:'guido@gmail.com',
      password:'contraseña',
    }])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
