// routes/authRoutes.js - Definição de rotas
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');

// Rotas de autenticação
router.post('/register', authController.register);
router.post('/login', authController.login);

// Rota protegida
router.get('/protected', authenticateToken, userController.protected);

module.exports = router;
