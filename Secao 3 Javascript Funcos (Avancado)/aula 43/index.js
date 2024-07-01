//Declarando de funcao
//First-Class objects (Objetos de primeira Classe);
//Function hoisting
//Vai elevar as funcoes e variaveis para o topo
//deixando eu utilizar a funcao em cima dela
falaOi()
function falaOi(){
    console.log('Oie')
}

//Function Expression
const souUmDado = function(){
    console.log('Sou um dado')
};

//executando uma variavel como uma function
souUmDado();

//Recebendo um parametro para a funcao que e uma funcao.
function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado)

//Arrow function maneira mais rapida para uma function Expression
const arrow = (/*Entra parametro*/) =>{
    console.log('arrow function')    
}
arrow();

const obj = {
    falar(){
        console.log('Estou Falando')
    }
}

obj.falar();