
// function classificarNumero(numero) {
//     if (numero > 0) {
//       return "O número é positivo.";
//     } else if (numero < 0) {
//       return "O número é negativo.";
//     } else {
//       return "O número é zero.";
//     }
//   }
  // Uma empresa oferece a seus clientes diversas opções de desconto para incentivar a compra de produtos, e a operação calculaTaxaDesconto(..) determina a taxa de desconto a ser aplicada. As regras de desconto são as seguintes:
  // A primeira compra de um cliente dá direito a um desconto de 10%.
  // Clientes bronze têm 5% de desconto em qualquer compra; prata tem 10% e ouro tem 15%.
  // Compras acima de R$200 reais dão direito a 5% de desconto, acima de R$400 a 10% de desconto e acima de R$500 a 15% de desconto.
  // Os descontos não podem ser acumulados - na incidência de mais de uma condição de desconto, vale o maior desconto
  
  function calcularDesconto(primeiraCompra, tipoCliente, valorCompra){
    let desconto;
    if(valorCompra >=500 || tipoCliente == "ouro"){
        desconto = 15;
    }else if(tipoCliente == "prata" || primeiraCompra == true || valorCompra>=400){
        desconto = 10;
    }else if(valorCompra >=200 || tipoCliente == "bronze"){
        desconto = 5;
    }else{
        desconto = 0;
    }
    return desconto;
  }

  function calcularTaxaDescontoV2(primeiraCompra, tipoCliente, valorCompra) {
    const taxas = [];
  
    if (valorCompra >= 500) {
      taxas.push(15);
    } else if (valorCompra >= 400) {
      taxas.push(10);
    } else if (valorCompra >= 200) {
      taxas.push(5);
    }
  
    if (tipoCliente === "ouro") {
      taxas.push(15);
    } else if (tipoCliente === "prata") {
      taxas.push(10);
    } else if (tipoCliente === "bronze") {
      taxas.push(5);
    }
  
    if (primeiraCompra) {
      taxas.push(10);
    }
  
    let maiorTaxa = 0;
    let indice = 0;
  
    while (indice < taxas.length) {
      if (taxas[indice] > maiorTaxa) {
        maiorTaxa = taxas[indice];
      }
      indice++;
    }
  
    return maiorTaxa;
  }
  

  module.exports = {calcularDesconto, calcularTaxaDescontoV2};