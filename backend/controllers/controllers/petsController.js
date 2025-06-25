const db = require('../db/connection');

// Listar todos os pets
exports.getAll = async (req, res) => {
  try {
    const pets = await db('pets').select();
    res.json(pets);
  } catch (error) {
    console.error('Erro detalhado:', error); // ← ESSA LINHA É ESSENCIAL
    res.status(500).json({ error: 'Erro ao buscar pets.', detalhes: error.message });
  }
};


// Criar um novo pet
exports.create = async (req, res) => {
  const { nome, tipo, idade } = req.body;

  if (!nome || !tipo || idade == null) {
    return res.status(400).json({ error: 'Dados incompletos.' });
  }

  try {
    const [id] = await db('pets').insert({ nome, tipo, idade });
    res.status(201).json({ id, nome, tipo, idade });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar pet.' });
  }
};

// Atualizar pet
exports.update = async (req, res) => {
  const { id } = req.params;
  const { nome, tipo, idade } = req.body;

  try {
    await db('pets').where({ id }).update({ nome, tipo, idade });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar pet.' });
  }
};

// Deletar pet
exports.remove = async (req, res) => {
  const { id } = req.params;

  try {
    await db('pets').where({ id }).del();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir pet.' });
  }
};
