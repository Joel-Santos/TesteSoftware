const cadastrarUser = require('./cadastroUser');


describe('Testes de carga com Banco Fake', ()=>{
    test('cadastrar 1000 registros no banco', ()=>{
        const numeroUser = 10000000;
        const banco = [];
        const start = Date.now();
        for(let i=0; i<numeroUser; i++){
            const user = cadastrarUser();
            banco.push(user);
        }
        const end = Date.now();
        const timeElapsed = end - start;
        expect(timeElapsed).toBeLessThanOrEqual(1000);
        console.log(`tempo de execução: ${timeElapsed}`);

    })
})