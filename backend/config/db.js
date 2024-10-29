//MySQL接続設定
const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
  host: 'localhost',         // データベースサーバーのホスト名 (例: 'localhost')
  user: 'root',         // データベースユーザー名 (例: 'root')
  password: 'rootroot', // データベース接続に使用するパスワード (例: 'password123')
  database: 'userlist'      // 使用するデータベース名 (例: 'user_database')
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = connection;
