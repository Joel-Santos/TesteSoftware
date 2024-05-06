const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const users = {
  admin: 'password'
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] === password) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
