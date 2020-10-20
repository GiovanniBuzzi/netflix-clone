'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('list', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_profile: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'profile', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_movie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('list');
     
  }
};
