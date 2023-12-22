// models/model.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../databse'); // Adjust the path based on your project structure

const Appointment = sequelize.define('Appointment', {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    clientName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    service: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Appointment;
