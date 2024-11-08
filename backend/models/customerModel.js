const db = require("../config/db");

const Customers = {
  create: (data, callback) => {
    const query = `INSERT INTO customers (name, email, phone, address, company_name) VALUES (?, ?, ?, ?, ?)`;
    db.query(
      query,
      [data.name, data.email, data.phone, data.address, data.company_name || null,],
      callback
    ); // データベースに新規情報の追加
  },

  findAll: (callback) => {
    const query = `SELECT * FROM customers`;
    db.query(query, callback);
  }, //全情報をデータベースから取得

  updateById: (id, data, callback) => {
    const query = `UPDATE customers SET name = ?, email = ?, phone = ?, address = ?, company_name = ? WHERE id = ?`;
    db.query(
      query,
      [data.name, data.email, data.phone, data.address, data.company_name, id],
      callback
    );
  }, //idからデータベースの情報を編集

  findById: (id) => {
    const query = `SELECT * FROM customers WHERE id = ?`;
    return new Promise((resolve, reject) => {
      db.query(query, [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }, //idからデータベースの情報を取得
};
module.exports = Customers;
