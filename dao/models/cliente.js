'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cliente.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    foto: DataTypes.BLOB('long'),
    correo: DataTypes.STRING,
    contrasena : DataTypes.STRING,
    numero: DataTypes.STRING,
    direccion: DataTypes.STRING,
    distrito: DataTypes.STRING,
    provincia: DataTypes.STRING,
    departamento: DataTypes.STRING,
    pep: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cliente',
    freezeTableName: true
  });
  return Cliente;
};