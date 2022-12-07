'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pokemons',[{
      id: 1,
      name:'Bulbasaur',
      img:'urlImagen',
      weight:6.9,
      height:0.7,
      description:'bulbasaur description',
      hp:45,
      atk:49,
      def:49,
      satk:65,
      sdef:65,
      spd:45
    },
    {
      id: 4,
      name:'Charmander',
      img:'urlImagen',
      weight:8.5,
      height:0.6,
      description:'Charmander description',
      hp:39,
      atk:52,
      def:43,
      satk:60,
      sdef:50,
      spd:65
    },
    {
      id: 7,
      name:'Squirtle',
      img:'urlImagen',
      weight:9.0,
      height:0.5,
      description:'Squirtle description',
      hp:44,
      atk:48,
      def:65,
      satk:50,
      sdef:64,
      spd:43
    },
    {
      id: 12,
      name:'Butterfree',
      img:'urlImagen',
      weight:32.0,
      height:1.1,
      description:'Butterfree description',
      hp:60,
      atk:45,
      def:50,
      satk:90,
      sdef:80,
      spd:70
    },
    {
      id: 25,
      name:'Pikachu',
      img:'urlImagen',
      weight:6.0,
      height:0.4,
      description:'Pikachu description',
      hp:35,
      atk:55,
      def:40,
      satk:50,
      sdef:50,
      spd:90
    },
    {
      id: 92,
      name:'Gastly',
      img:'urlImagen',
      weight:0.1,
      height:1.3,
      description:'Gastly description',
      hp:30,
      atk:35,
      def:30,
      satk:100,
      sdef:35,
      spd:80
    },
    {
      id: 132,
      name:'Ditto',
      img:'urlImagen',
      weight:4.0,
      height:0.3,
      description:'Ditto description',
      hp:48,
      atk:48,
      def:48,
      satk:48,
      sdef:48,
      spd:48
    },
    {
      id: 144,
      name:'Articuno',
      img:'urlImagen',
      weight:55.4,
      height:1.7,
      description:'Articuno description',
      hp:90,
      atk:85,
      def:100,
      satk:95,
      sdef:125,
      spd:85
    },
    {
      id: 151,
      name:'Mew',
      img:'urlImagen',
      weight:4.0,
      height:0.4,
      description:'Mew description',
      hp:100,
      atk:100,
      def:100,
      satk:100,
      sdef:100,
      spd:100
    },])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pokemons', null, {});   
  }
};
