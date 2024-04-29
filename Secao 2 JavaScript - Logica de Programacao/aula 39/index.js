// try  um teste

try{
    console.log(naoExisto);
} catch(err){// recebe o erro
console.log("nao deu certo rapa"); 
} 

function soma( x,y){
    if(typeof x!== 'number' 
    || typeof y !== 'number'
    ) {
        throw new Error('X e y precisam ser numeros')
    }
    return x + y;
}

try{
    console.log(soma(1,2));
    console.log(soma('1',2));
} catch(error) {
    // console.log(error);
}