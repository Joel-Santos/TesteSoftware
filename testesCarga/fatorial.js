function calcularFatorial1(numero){
    if(numero === 0 || numero ===1 ){
        return 1;
    }
    else{
        return numero * calcularFatorial(numero-1);
    }
}
function calcularFatorial2(numero) {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(calcularFatorial2());
module.exports = {calcularFatorial1, calcularFatorial2};
