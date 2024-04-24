const productModel = require('./produtoModel');

beforeEach(async () => {
    await new Promise((resolve, reject) => {
        productModel.deleteAllProducts((err, result) => {
            if (err) reject(err);
            resolve();
        });
    });
    await new Promise((resolve, reject) => {
        productModel.createProduct('Pamonha','2.50', (err, result) => {
            if (err) reject(err);
            resolve();
        });
    });
});

test('Create product', done => {
    productModel.createProduct('Rapadura', '5.99', (err, result) => {
        expect(err).toBeNull();
        expect(result.affectedRows).toBe(1);
        done();
    });
});

test('Get all products', done => {
    productModel.getAllProducts((err, results) => {
        expect(err).toBeNull();
        expect(results.length).toBeGreaterThan(0);
        done();
    });
});

test('Get product by ID', done => {
    productModel.getProductById(1, (err, results) => {
        expect(err).toBeNull();
        expect(results.length).toBe(1);
        expect(results[0].name).toBe("Pamonha");
        done();
    });
});

test('Update product', done => {
    productModel.updateProduct(1, 'Doce de Leite', '11.99', (err, result) => {
        expect(err).toBeNull();
        expect(result.affectedRows).toBe(1);
        done();
    });
});

test('Delete product', done => {
    productModel.deleteProduct(1, (err, result) => {
        expect(err).toBeNull();
        expect(result.affectedRows).toBe(1);
        done();
    });
});
