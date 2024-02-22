/*
Avaliacao de curto circuito
&& -> false && true -> false
|| -> true && false -> vai retorna o "o valor verdadeiro"

Valores em False
Literal -> False
=
0
'' "" ``
null/undefined
NaN
*/

//Exemplos com &&
console.log('Luiz Otavio' && 'Maria') // true

//False pois tem um valor em False
console.log('Luiz Otavio' && '' && 'Maria') //false 

function falaOi(){
    return 'Oi';
}

let vaiExecutar = 'Joaozinho';

console.log(vaiExecutar && falaOi());

// O || esta retornando o primeiro valor verdadeiro 
console.log(0 || false || null || 'Luiz Otavio' || true);

const corUsuario = 'Vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = ''; 
const d = false;
const e = NaN;

//Se todas forem false a ultima e avaliada em falsa
console.log(a || b || c || d || e);