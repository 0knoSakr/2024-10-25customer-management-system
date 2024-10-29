const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'userlist'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = connection;
