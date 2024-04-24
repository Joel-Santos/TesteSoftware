const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'BemVindo!',
  database: 'test_db'
});

module.exports = connection;
