const sum = require('./sum');

describe('Testes iniciais', () => {
    test('Soma de 1 + 2', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('Soma de 1 + (-1)', () => {
        expect(sum(1, -1)).toBe(0);
    });
    test('Soma de 1 + (0)', () => {
        expect(sum(1, 0)).toBe(1);
    });
});



