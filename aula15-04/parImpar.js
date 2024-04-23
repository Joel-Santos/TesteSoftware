function parImpar(n){
    let saida
    if(n==0){
        saida = "Zero"
    }else if(n>0){
        if(n%2==0){
            saida = "par positivo"
        }else{
            saida = "impar positivo"
        }
    }else{
        if(n%2==0){
            saida = "par negativo"
        }else{
            saida = "impar negativo"
        }
    }
    return saida
}

console.log(parImpar(-9))