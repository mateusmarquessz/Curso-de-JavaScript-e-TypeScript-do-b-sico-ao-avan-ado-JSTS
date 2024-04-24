const numeros = [1, 2, 3, 4, 5, 6, 7 ,8];

for(let numero of numeros){
    //nao executa o numero o 2 no console.log
    if(numero === 2){
        console.log("Pulei o numero 2")
        continue;
    }
    console.log(numero);
    if(numero === 7){
        break;
    }
}