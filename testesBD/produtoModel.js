const db = require('./db');

const productModel = {
    createProduct: (name, price, callback) => {
        db.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price], function(error, results) {
            callback(error, results);
        });
    },

    getAllProducts: (callback) => {
        db.query('SELECT * FROM products', [], function(error, results) {
            callback(error, results);
        });
    },

    getProductById: (id, callback) => {
        db.query('SELECT * FROM products WHERE id = ?', [id], function(error, results) {
            callback(error, results);
        });
    },

    updateProduct: (id, name, price, callback) => {
        db.query('UPDATE products SET name = ?, price = ? WHERE id = ?', [name, price, id], function(error, results) {
            callback(error, results);
        });
    },

    deleteProduct: (id, callback) => {
        db.query('DELETE FROM products WHERE id = ?', [id], function(error, results) {
            callback(error, results);
        });
    }
};

module.exports = productModel;
