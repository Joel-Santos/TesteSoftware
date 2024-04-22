const calcularDesconto = require('./caixaBranca');

describe('Testes da função calcularDesconto', () =>{
    test('Desconto de 5%', () =>{
        expect(calcularDesconto.calcularDesconto(false, 'bronze', 100)).toBe(5)
    });
    test('Desconto de 10%', () =>{
        expect(calcularDesconto.calcularDesconto(false, 'bronze', 400)).toBe(10);
    });
    test('Desconto de 15%', ()=>{
        expect(calcularDesconto.calcularDesconto(false, 'bronze', 500)).toBe(15);
    })
    test('Desconto de 0%', ()=>{
        expect(calcularDesconto.calcularDesconto(false, 'cobre', 199)).toBe(0);
    })

    test('Desconto de 0% função 02', ()=>{
        expect(calcularDesconto.calcularTaxaDescontoV2(false, 'c', 199)).toBe(0);
    })
    test('Desconto de 10% função 02', ()=>{
        expect(calcularDesconto.calcularTaxaDescontoV2(false, 'bronze', 400)).toBe(10);
    })
    test('Desconto de 15% função 02', ()=>{
        expect(calcularDesconto.calcularTaxaDescontoV2(false, 'bronze', 500)).toBe(15);
    })
    test('Desconto de 5% função 02', ()=>{
        expect(calcularDesconto.calcularTaxaDescontoV2(false, 'bronze', 200)).toBe(5);
    })
    test('Desconto primeira compra função 02', ()=>{
        expect(calcularDesconto.calcularTaxaDescontoV2(true, 'bronze', 200)).toBe(10);
    })
    test('Desconto ouro função 02', ()=>{
        expect(calcularDesconto.calcularTaxaDescontoV2(true, 'ouro', 200)).toBe(15);
    })
    test('Desconto prata função 02', ()=>{
        expect(calcularDesconto.calcularTaxaDescontoV2(true, 'prata', 200)).toBe(10);
    })
    test('Desconto bronze função 02', ()=>{
        expect(calcularDesconto.calcularTaxaDescontoV2(false, 'bronze', 200)).toBe(5);
    })

    test('Desconto bronze função 02', ()=>{
        expect(calcularDesconto.calcularTaxaDescontoV2(false, 'ferrugem', 199)).toBe(0);
})



});