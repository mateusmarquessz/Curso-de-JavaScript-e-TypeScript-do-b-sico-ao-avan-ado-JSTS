//Clousures


//Clousures e a habilidade de acessar o  escopo lexo das funcoes
function criaFuncao(){
    const nome = 'Luiz';
    return function(){
        return nome;
    }
}