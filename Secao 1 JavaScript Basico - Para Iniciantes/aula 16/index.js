const alunos = 'Luiz Maria Joao';
//array e uma lista de coisas

const alunosArray = ['Luiz', 'Maria', 'Joao'];

//Javascript nao me restringe somente a nomes, baseado nesse caso, eu por exemplo posso colocar numbers com string com boolean e etc, nao e uma boa pratica.
const nome = 'Luiz Otavio';
console.log(nome[1])
//String e indexado pelas letras, os Arrays pelos bloco ['0' '1' '2']

//vai mostrar o joao array na terceira posicao
console.log(alunosArray[2]);

//mudando array
alunosArray[0] = 'Eduardo';
//Add nova posicao no array
alunosArray[3] = 'Luiza';
console.log(alunosArray);

//mostrando tamanho do array
console.log(alunosArray.length);

//Add elemento no final do array
//alunosArray[alunosArray.length] = 'Mateus';

//Add elemento no final do array
alunosArray.push('Mateus');

//Add elemento no fim do array
alunosArray.unshift('Fabio');

//Remove elemento do fim do array
alunosArray.pop();

//Remove elemento do comeco do array
alunosArray.shift();

//Deletando os indices e elementos do array
delete alunosArray[1];

//Em javascript podemos acessar  indices que nao existem, no valor undefined

//fatiando array
console.log(alunosArray.slice(0, 1));

//tipo de array = object