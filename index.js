const express = require('express');
const cors = require('cors');  // Importando o pacote cors
const { sequelize } = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:3001', // Permitir apenas requisições de localhost:3001 (frontend)
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
}));

app.use(express.json());

// Usando as rotas de autenticação
app.use('/api', authRoutes);

// Inicialização do servidor e sincronização do banco de dados
sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});
