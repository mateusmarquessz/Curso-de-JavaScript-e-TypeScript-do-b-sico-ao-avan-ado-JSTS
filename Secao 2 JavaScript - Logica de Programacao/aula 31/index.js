//let a = 'a';
//let b = 'b';
//let c = 'c';

//const numeros = [b, c, a];
//[a, b, c] = numeros;

//console.log(a, b, c);



const numero = [100, 200, 300, 400, 500 ,600];

const [priNumero, segNumero, TerNumero] = numero;

console.log(priNumero, segNumero, TerNumero);
console.log(resto);


//pegando resto do array
//const [priNumero, segNumero ... [resto]] = numeros;

//Pulando indices do arrays;
//const [priNumero, , segNumero, , TerNumero, ...resto] = numero;

//Array dentro de array

                    
const arrays = [ [ 1,2,3] , [ 11,22,33], [ 111,222,333]]
const  [lista1, lista2, lista3] = arrays;
console.log(lista3[2]);
