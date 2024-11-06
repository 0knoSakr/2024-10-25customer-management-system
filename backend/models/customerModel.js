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

  findAll: (callback) => {
    const query = `SELECT * FROM customers`;
    db.query(query, callback);
  },

  updateById: (id, data, callback) => {
    const query = `UPDATE customers SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?`;
    db.query(
      query,
      [data.name, data.email, data.phone, data.address, id],
      callback
    );
  },

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
  }
  }
module.exports = Customers;
