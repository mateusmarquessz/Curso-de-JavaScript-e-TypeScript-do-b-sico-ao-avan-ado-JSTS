let nome = 'Luiz Otavio';
const sobrenome = ' Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
let anoNascimento;

anoNascimento = idade - 2024;
imc = peso / (altura * altura);

console.log(nome, sobrenome, 'tem', idade, ', pesa ', peso, "kg tem", altura, "de altura e seu IMC e de " , imc, nome, "nasceu em ", anoNascimento );