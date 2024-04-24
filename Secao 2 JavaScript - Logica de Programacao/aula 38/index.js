//Escreva uma funcao que recebe 2 numeros e retorne o o maior deles
/*
function numeros (a, b){
    if(a>b){
        return a;
    } else{
        return b;
    }
};
console.log(numeros(1, 2));

//EX02

function ePaisagem(largura, altura){
    if(largura > altura){
        return true;
    }
    return false;
}

console.log(ePaisagem(1080, 1920));
*/

//Ex03

function numero(numero){
    if(typeof numero !== 'number') return numero;
    if(n % 3 === 0) return ' Fizz';
    if(n % 5 === 0) return ' Buzz';
    if(n % 5 === 0 && n % 5 === 0 ) return 'FizzBuzz';
    return numero;
}

for(let i = 0; i<= 100; i++){
    console.log(i,numero(i));
}