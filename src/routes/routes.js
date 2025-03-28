const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuarios');
const avaliacoesController = require('../controllers/avaliacoes');

router.get('/usuarios', usuariosController.listarUsuarios);
router.get('/avaliacoes', avaliacoesController.listarAvaliacoes);

module.exports = router;