const express = require('express');
const router = express.Router();
const controller = require('../controllers/petsController');

// GET /api/pets — lista todos os pets
router.get('/', controller.getAll);

// POST /api/pets — cadastra um novo pet
router.post('/', controller.create);

// PUT /api/pets/:id — atualiza os dados de um pet
router.put('/:id', controller.update);

// DELETE /api/pets/:id — remove um pet
router.delete('/:id', controller.remove);

module.exports = router;
