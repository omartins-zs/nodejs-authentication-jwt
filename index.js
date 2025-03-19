const express = require('express');
const cors = require('cors');
const { sequelizeSQLite, sequelizeMySQL } = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Usando as rotas de autenticação
app.use('/api', authRoutes);

// Inicialização do servidor e sincronização dos bancos de dados
Promise.all([
    sequelizeSQLite.sync()
    // sequelizeMySQL.sync()
]).then(() => {
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
}).catch(error => {
    console.error('Erro ao sincronizar os bancos de dados:', error);
});
