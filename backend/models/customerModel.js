const db = require("../config/db");

const Customers = {
  create: (data, callback) => {
    const query = `INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?)`;

    db.query(
      query,
      [data.name, data.email, data.phone, data.address],
      callback
    );
  },

  findByEmail: (email, callback) => {
    const query = `SELECT * FROM customers WHERE email = ?`;

    db.query(query, [email], (err, results) => {
      if (err) return callback(err, null);

      if (results.length > 0) return callback(null, results[0]);

      return callback(null, null);
    });
  },

  findAll: (callback) => {
    const query = `SELECT * FROM customers`;

    db.query(query, callback);
  },

  updateById: (id, data, callback) => {
    const query = `UPDATE customers SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?`; // 不必要なコンマを削除

    db.query(
      query,
      [data.name, data.email, data.phone, data.address, id],
      callback
    );
  },
  deleteById: (id, callback) => {
    const query = `DELETE FROM customers WHERE id = ?`;

    db.query(query, [id], callback);
  },
};

module.exports = Customers;
