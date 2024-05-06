import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('public'));

const usuarios = {
  admin: 'password'
};

// Rota para o processamento do login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (usuarios[username] === password) {
    res.json({ success: true, message: 'Login bem-sucedido' });
  } else {
    res.json({ success: false, message: 'Credenciais inválidas' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
