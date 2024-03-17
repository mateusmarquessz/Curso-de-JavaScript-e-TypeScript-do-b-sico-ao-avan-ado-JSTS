const verdadeira = true;

// let tem escopo de bloco {.......}
//Var so tem escopo de funcao

let nome = 'Luiz'; //criando fora do bloco
var nome2 = 'Luiz';

if(verdadeira){
    let nome = 'Otavio'; //criando dentro do bloco
    //console.log(nome, nome2);
    
    if(true){
        let nome = 'Outracoisa';
        console.log(nome, nome2);
    }
}