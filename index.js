// index.js - Ponto de entrada do app
const express = require('express');
const { sequelize } = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/api', authRoutes);

// Inicialização do servidor e sincronização do banco de dados
sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});
