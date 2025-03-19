// middlewares/authMiddleware.js - Middleware de Autenticação
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'seu_segredo_super_secreto';

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ error: 'Token necessário' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token inválido' });
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
