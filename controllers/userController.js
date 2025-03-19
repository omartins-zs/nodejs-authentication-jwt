// controllers/userController.js - Controlador de Usuário
exports.protected = (req, res) => {
    res.json({ message: 'Acesso autorizado!', user: req.user });
};
