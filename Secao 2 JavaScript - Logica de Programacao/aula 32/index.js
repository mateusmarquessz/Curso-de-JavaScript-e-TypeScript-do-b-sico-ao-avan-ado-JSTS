const pessoa = {
    nome: '',
    sobrenome: 'Miranda',
    idade: 30, 
    endereco:{
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuicao via desestruturacao
const{
    //mudando nome da variavel
    nome: teste = '', 
    sobrenome,
    //pegando os dados de endereco, e pegando somente os dados dentro de endereco
    endereco: {rua: r, numero }, endereco} = pessoa;
console.log(teste, sobrenome, r, numero, endereco);