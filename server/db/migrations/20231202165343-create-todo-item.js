'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('TodoItems', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            completed: {
                type: Sequelize.BOOLEAN,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('TodoItems');
    },
};
