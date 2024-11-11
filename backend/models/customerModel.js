const db = require("../config/db");

const Customers = {
  create: async (data) => {
    const query = `INSERT INTO customers (name, email, phone, address, company_name) VALUES (?, ?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
      db.query(
        query,
        [data.name, data.email, data.phone, data.address, data.company_name || null],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    });
  },

  findAll: async () => {
    const query = `SELECT * FROM customers`;
    return new Promise((resolve, reject) => {
      db.query(query, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },

  updateById: async (id, data) => {
    const query = `UPDATE customers SET name = ?, email = ?, phone = ?, address = ?, company_name = ? WHERE id = ?`;
    return new Promise((resolve, reject) => {
      db.query(
        query,
        [data.name, data.email, data.phone, data.address, data.company_name, id],
        (error, results) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    });
  },

  findById: async (id) => {
    const query = `SELECT * FROM customers WHERE id = ?`;
    return new Promise((resolve, reject) => {
      db.query(query, [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results[0] || null); // 配列の最初の要素を返し、見つからない場合はnull
      });
    });
  },

  deleteById: async (id) => {
    const query = `DELETE FROM customers WHERE id = ?`;
    return new Promise((resolve, reject) => {
      db.query(query, [id], (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },
};

module.exports = Customers;
