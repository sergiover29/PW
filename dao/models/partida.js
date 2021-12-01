'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Partida.init({
    fecha: DataTypes.DATE,
    hora: DataTypes.TIME,
    duracion: DataTypes.INTEGER,
    equipoA: DataTypes.STRING,
    equipoB: DataTypes.STRING,
    factorA: DataTypes.FLOAT,
    factorB: DataTypes.FLOAT,
    factorE: DataTypes.FLOAT,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Partida',
    freezeTableName: true
  });
  return Partida;
};