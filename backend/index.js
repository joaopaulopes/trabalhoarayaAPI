require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Importa as rotas de pets
const petsRoutes = require('./routes/pets');

// Usa as rotas no caminho /api/pets
app.use('/api/pets', petsRoutes);

// Pega a porta do .env ou usa 3000
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
