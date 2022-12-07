'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('types', [{
        type: 'Ice' //1
      },
      {
        type: 'Dark' //2
      },
      {
        type: 'Fairy' //3
      },
      {
        type: 'Fighting' //4
      },
      {
        type: 'Ground' //5
      },
      {
        type: 'Dragon' //6
      },
      {
        type: 'Rock' //7
      },
      {
        type: 'Water' //8
      },
      {
        type: 'Electric' //9
      },
      {
        type: 'Psychic' //10
      },
      {
        type: 'Ghost' //11
      },
      {
        type: 'Normal' //12
      },
      {
        type: 'Fire' //13
      },
      {
        type: 'Bug' //14
      },
      {
        type: 'Grass' //15
      },
      {
        type: 'Steel' //16
      },
      {
        type: 'Poison' //17
      },
      {
        type: 'Flying' //18
      }], {}); 
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('types', null, {});  
  }
};
