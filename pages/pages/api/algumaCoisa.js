// arquivo: handler.js
module.exports = (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Exemplo de resposta para GET
      res.status(200).json({ message: 'GET request recebida!' });
      break;

    case 'POST':
      // Exemplo de resposta para POST
      res.status(201).json({ message: 'POST request recebida!' });
      break;

    default:
      // Para qualquer outro método
      res.status(404).json({ message: `Método ${method} não suportado` });
      break;const express = require('express');
const app = express();
const handler = require('./handler');

app.use(express.json()); // Para ler JSON do corpo da requisição

app.all('/api/teste', handler); // Usa o mesmo handler para todos os métodos

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
