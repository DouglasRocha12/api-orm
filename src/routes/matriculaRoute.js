const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const pessoaController = new PessoaController();


const router = Router();


router.get('/matricula', (req, res) =>  pessoaController.getAll(req, res));
router.get('/matricula/:id', (req, res) => pessoaController.getById(req, res));
router.post('/matricula', (req, res) => pessoaController.create(req, res));
router.put('/matricula/:id', (req, res) => pessoaController.update(req, res));
router.delete('/matricula/:id', (req, res) => pessoaController.delete(req, res));

module.exports = router;