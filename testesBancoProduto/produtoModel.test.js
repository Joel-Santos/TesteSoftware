const produtoModel = require('./produtoModel');

beforeEach(async () => {
    await new Promise((resolve, reject) => {
        produtoModel.deleteAllProducts((error, result) => {
            if (error) reject(error);
            resolve();
        });
    });
    await new Promise((resolve, reject) => {
        produtoModel.createProduct('Pamonha','2.50', (error, result) => {
            if (error) reject(error);s
            resolve();
        });
        produtoModel.createProduct('Pamonha','2.50', (error, result) => {
            if (error) reject(error);
            resolve();
        });
    });
});


test('Listar todos os produtos', done => {
    produtoModel.getAllProducts((err, results) => {
        expect(err).toBeNull();
        expect(results.length).toBeGreaterThan(0);
        done();
    });
});
test('Inserir produto', done=>{
    produtoModel.createProduct('Bolo', '2.50', (err, results) =>{
        expect(err).toBeNull();
        expect(results.affectedRows).toBe(1);
        done();
    })
});
test('Buscar produto', done=>{
    produtoModel.getProductById(1, (err, results)=>{
        expect(err).toBeNull();
        expect(results.length).toBe(1);
        expect(results[0].nome).toBe("Pamanha");
        done();
    });
});
test('Deletando um registro', done =>{
    produtoModel.deleteProduct(1, (err, results) =>{
        expect(err).toBeNull();
        expect(results.affectedRows).toBe(1);
        done();
    });
});

