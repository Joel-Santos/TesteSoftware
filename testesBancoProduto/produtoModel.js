const db = require('./db');
const produtoModel = {
    getAllProducts:(callback) => {
        db.query('SELECT * FROM produtos', [], function(error, results) {
            callback(error, results);
        });
    },
    createProduct: (nome, preco, callback) => {
        db.query('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [nome, preco], function(error, results) {
            callback(error, results);
        });
    },
    getProductById: (id, callback) => {
        db.query('SELECT * FROM produtos WHERE id = ?', [id], function(error, results) {
            callback(error, results);
        });
    },
    updateProduct: (id, nome, preco, callback) => {
        db.query('UPDATE produtos SET nome = ?, preco = ? WHERE id = ?', [nome, preco, id], function(error, results) {
            callback(error, results);
        });
    },
    deleteProduct: (id, callback) => {
        db.query('DELETE FROM produtos WHERE id = ?', [id], function(error, results) {
            callback(error, results);
        });
    },
    deleteAllProducts: (callback) => {
        db.query('DELETE FROM produtos', function(error, results) {
            callback(error, results);
        });
    }
}
module.exports = produtoModel;