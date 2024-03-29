const frutas = ['maca', 'banana', 'abacaxi'];
let i =0;
//for normal
for (i = 0; i<frutas.length; i ++){
    console.log(frutas[i]);
}

//for in bom com objetos
//for in le os indices ou chaves do objetos
//indices = vetor  chaves = objeto
for(i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

console.log(pessoa['nome']);

for(let chaves in pessoa){
    console.log(pessoa[chaves]);
}