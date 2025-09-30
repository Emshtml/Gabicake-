module.exports = (req, res) => {
  res.status(404).json({ message: 'Not Found' });
};const express = require('express');
const app = express();

// Importa o handler
const notFoundHandler = require('./notFoundHandler');

// Rota de teste
app.get('/teste', (req, res) => {
  res.send('Rota encontrada!');
});

// Qualquer outra rota não definida vai cair aqui
app.use(notFoundHandler);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

