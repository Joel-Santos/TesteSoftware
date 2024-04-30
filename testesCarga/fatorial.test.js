const fatorial = require('./fatorial');

describe("Testes de carga para calcular o fatorial", ()=>{
    test("Calcular com numero grande", ()=>{
        const start = Date.now();
        const result = fatorial.calcularFatorial2(100000);
        const end = Date.now();
        const timeElapsed = end - start;
        expect(timeElapsed).toBeLessThanOrEqual(1000);
        console.log(`tempo de execução: ${timeElapsed}`);
    });
});