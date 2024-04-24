const produto = require('./produtoModel');

produto.getAllProducts((error, results) => {
    if (error) {
        console.error("Erro ao buscar produtos:", error);
        return;
    }
    console.log("Produtos encontrados:", results);
});


produto.deleteAllProducts((error, results) => {
    if (error) {
        console.error("Erro ao deletar os produtos:", error);
        return;
    }
    console.log("Produtos deletados com sucesso:", results);
});
 
// produto.createProduct('Pastel de alho', '10.00', (error, results)=>{
//     if (error) {
//         console.error("Erro ao inserir o produto", error);
//         return;
//     }
//     console.log("Produto inserido com sucesso:", results);
// });

produto.getProductById(6, (error, results)=>{
    if (error) {
        console.error("Erro ao buscar produto:", error);
        return;
    }
    console.log("Produtos encontrado:", results);
});



