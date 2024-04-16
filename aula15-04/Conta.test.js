// Conta.test.js
const Conta = require('./Conta');

describe('Testes do método construtor', () => {
    let conta;
    // beforeEach(()=>{
    //      conta = undefined; 
    // })
    test('Objeto com saldo positivo',()=>{
        conta = new Conta('Joel', 85)
        expect(conta.titular).toBe('Joel');
        expect(conta.saldo).toBe(85);   
    });
    test('Objeto com saldo zero', ()=>{
        conta = new Conta('Joel')
        expect(conta.saldo).toBe(0)
    });
    test('Saldo negativo', ()=>{
        conta = new Conta('Joel', -9)
        expect(conta.getSaldo()).toBe(-9);
        expect(conta.titular).toBe('Joel')
    })
})

describe('Testes para o método depositar', () => {
    let conta;
    beforeEach(() => {
      conta = new Conta('Maria', 200);
    });
    test('Depósito com valor positivo', () => {
      conta.depositar(300);
      expect(conta.getSaldo()).toBe(500);
    });
    test('Depósito com valor zero', () => {
        expect(()=>conta.depositar(0)).toThrow('O valor do depósito deve ser positivo.')
    });
    test('Depósito com valor negativo', () => {
        expect(()=>conta.depositar(-9)).toThrow('O valor do depósito deve ser positivo.')
    });

    test('Depósito com valor negativo', () => {
        conta.depositar(1000000);
        expect(conta.getSaldo()).toBe(1000200);
    });

});

describe('Testes para o método sacar', () => {
    let conta;
    beforeEach(() => {
      conta = new Conta('Maria', 200);
    });
    test('Saque com valor válido', () => {
        conta.sacar(100)
        expect(conta.getSaldo()).toBe(100);
    });
    test('Saque total', () => {
        conta.sacar(200)
        expect(conta.getSaldo()).toBe(0);
    });
    test('Saque valor zero', () =>{
        expect(()=>conta.sacar(0)).toThrow('O valor do saque deve ser positivo.')
    });
    test('Saque valor negativo', () =>{
        expect(()=>conta.sacar(-100)).toThrow('O valor do saque deve ser positivo.')
    });
    test('Saque valor acima do saldo', () =>{
        expect(()=>conta.sacar(201)).toThrow('Saldo insuficiente.')
    });
});

describe('Testes para o método getSaldo', () => {
    let conta;
    beforeEach(() => {
      conta = new Conta('Ana', 500);
    });
  
    test('Consulta de saldo', () => {
      expect(conta.getSaldo()).toBe(500);
      conta.depositar(200);
      expect(conta.getSaldo()).toBe(700);
      conta.sacar(150);
      expect(conta.getSaldo()).toBe(550);
    });
});