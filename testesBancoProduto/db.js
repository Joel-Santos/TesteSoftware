const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'BemVindo!',
  database: 'bdprodutos'
});

module.exports = connection;