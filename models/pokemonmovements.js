'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pokemonMovements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pokemonMovements.init({
    id_pokemon: DataTypes.INTEGER,
    id_movement: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pokemon_movements',
  });
  return pokemonMovements;
};