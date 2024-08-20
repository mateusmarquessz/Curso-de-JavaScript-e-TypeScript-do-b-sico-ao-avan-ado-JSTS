//argumentos que sustenta todos os argumentos enviado somente fuctions
function funcao(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}

funcao(1,2,3,4,5);



//O javascript nao vai dar o erro caso nao passe todos os argumentos de uma funcao
function letras(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f);
}

letras(1,2,3)


//colando valor padrao no argumento
function soma(a,b = 2, c = 2){
    console.log(a+b+c);
}

//nesse caso b assume o valor de 10
soma(2, 10);

//pulando o b
soma(2,undefined, 10);

