'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      due_date: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Todos');
  }
};