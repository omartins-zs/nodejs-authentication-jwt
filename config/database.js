const { Sequelize } = require('sequelize');

// Conexão SQLite
const sequelizeSQLite = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

// Conexão MySQL
const sequelizeMySQL = new Sequelize('nodejs-authentication-jwt', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307 // Porta do MySQL
});

module.exports = { sequelizeSQLite, sequelizeMySQL };
