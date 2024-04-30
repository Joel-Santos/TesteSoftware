const express = require('express');
const app = express();
const port = 3000;

app.get('/api/usuarios', (req, res) => {
  res.json([{ id: 1, nome: "Usuário 1" }, { id: 2, nome: "Usuário 2" }]);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
