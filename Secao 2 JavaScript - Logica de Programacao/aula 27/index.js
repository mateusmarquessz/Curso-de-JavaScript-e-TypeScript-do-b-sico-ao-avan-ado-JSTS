// ? : 
const pontuacaoUsuario = 500;


//normalmente
//if(pontuacaoUsuario >= 1000){
//   console.log(`Usuario VIP`);
//} else {
//    console.log(`Usuario normal`);
//}

//Operacao ternaria
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

console.log(nivelUsuario);

const corUsuario = null;
//Operacao ternaria
const corPadrao = corUsuario || `Preta`;
console.log(nivelUsuario, corPadrao);