'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cliente', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.INTEGER
      },
      foto: {
        type: Sequelize.BLOB('long')
      },
      correo: {
        type: Sequelize.STRING
      },
      contrasena: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      distrito: {
        type: Sequelize.STRING
      },
      provincia: {
        type: Sequelize.STRING
      },
      departamento: {
        type: Sequelize.STRING
      },
      pep: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cliente');
  }
};