const { DataTypes } = require('sequelize');
const { sequelizeSQLite, sequelizeMySQL } = require('../config/database');

// Escolha qual conexão usar. 
// Aqui vou demonstrar como configurar para MySQL, mas você pode escolher a conexão SQLite conforme necessário.

// Usando o Sequelize com MySQL
const User = sequelizeMySQL.define('User', {
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
});

// Caso você queira usar o SQLite, basta descomentar a linha abaixo:
// const User = sequelizeSQLite.define('User', {
//     username: { type: DataTypes.STRING, unique: true, allowNull: false },
//     password: { type: DataTypes.STRING, allowNull: false }
// });

module.exports = User;
