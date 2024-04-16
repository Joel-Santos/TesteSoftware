class Conta {
    constructor(titular, saldoInicial = 0) {
      this.titular = titular;
      this.saldo = saldoInicial;
    }
    depositar(valor) {
      if (valor <= 0) {
        throw new Error("O valor do depósito deve ser positivo.");
      }
      this.saldo += valor;
    }
  
    sacar(valor) {
      if (valor <= 0) {
        throw new Error("O valor do saque deve ser positivo.");
      }
      if (this.saldo < valor) {
        throw new Error("Saldo insuficiente.");
      }
      this.saldo -= valor;
    }
  
    getSaldo() {
      return this.saldo;
    }
  }
  
  module.exports = Conta;
  