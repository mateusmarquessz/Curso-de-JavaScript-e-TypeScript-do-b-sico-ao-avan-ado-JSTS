
//primitivos - Valores Copiados

//String e imutavel no caso o valor e imutavel
let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0]);

let a = 'A';
let b = a;//copiando valor de a para b

a = 'Outra coisa';
console.log(a,b);

//referencia- sao valores que sao passados por referencia
//Refencia (mutaval) - array, object, fuction

let c = [1, 2, 3];
let d = [...a];
let e = d;
console.log(c,d);


//estao apontando o mesmo valor da memoria
c.push(4);
console.log(c,d);

d.pop();
console.log(c,d);

e.push('Athur');
console.log(e);


const pessoa = {
    nome:'Luiz',
    sobrenome: 'Otavio'
}
const pessoa1 = {...pessoa};

pessoa.nome = 'Joao';
console.log(b);  