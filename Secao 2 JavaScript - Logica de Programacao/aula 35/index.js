const nome = ['Luiz', 'Otavio', 'Henrique'];


//For classico
for(let i = 0 ; i<nome.length ; i ++){
    console.log(nome[i]);
}

console.log('####')

//For In mais simplificada obtendo o indice
for(let i in nome){
    console.log(nome[i]);
}

console.log('####')

//For of
for (let valor of nome){
    console.log(valor);
}


console.log('####')

nomes.ForEach(function(valor, indice, array){
    console.log(valor, indice, array);
});