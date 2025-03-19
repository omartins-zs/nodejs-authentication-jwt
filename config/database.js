// config/database.js - Configuração do banco de dados
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

module.exports = { sequelize };
