const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servindo imagens locais
app.use('/images-api', express.static(path.join(__dirname, 'images-api')));

// Servindo arquivos estáticos (HTML, scripts, etc)
app.use(express.static(__dirname));

// Endpoint manual para artistas
app.get('/api/artists', (req, res) => {
  const data = require('./artists-2-local.json');
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});