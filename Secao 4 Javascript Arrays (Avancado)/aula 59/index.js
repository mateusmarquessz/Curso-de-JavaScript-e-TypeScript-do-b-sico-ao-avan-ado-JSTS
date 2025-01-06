// Exemplo básico: Soma de todos os números em um array
const numbers = [1, 2, 3, 4, 5];

// O método reduce recebe dois argumentos: a função callback e um valor inicial
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // Soma o acumulador ao valor atual
}, 0); // O valor inicial do acumulador é 0

console.log("Soma dos números:", sum); // 15

// -------------------------------------------------------------

// Exemplo: Multiplicação de todos os números em um array
const product = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue; // Multiplica o acumulador pelo valor atual
}, 1); // O valor inicial do acumulador é 1

console.log("Produto dos números:", product); // 120

// -------------------------------------------------------------

// Exemplo com objetos: Somar valores de um campo específico
const items = [
  { name: 'Item 1', price: 10 },
  { name: 'Item 2', price: 20 },
  { name: 'Item 3', price: 30 }
];

// Usando reduce para somar os preços
const totalPrice = items.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0); // Valor inicial do acumulador é 0

console.log("Preço total:", totalPrice); // 60

// -------------------------------------------------------------

// Exemplo com um array de strings: Concatenar strings
const words = ["Hello", "World", "from", "reduce"];

// Usando reduce para concatenar palavras
const sentence = words.reduce((accumulator, word) => {
  return `${accumulator} ${word}`; // Concatena as palavras
}, ""); // Valor inicial do acumulador é uma string vazia

console.log("Frase criada:", sentence.trim()); // "Hello World from reduce"

// -------------------------------------------------------------

// Exemplo avançado: Agrupar dados por chave
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Alice', age: 25 },
];

// Agrupar pessoas pelo nome
const groupedByName = people.reduce((accumulator, person) => {
  // Se a chave ainda não existe no acumulador, inicializa como um array vazio
  if (!accumulator[person.name]) {
    accumulator[person.name] = [];
  }
  // Adiciona a pessoa ao grupo
  accumulator[person.name].push(person);
  return accumulator;
}, {});

console.log("Pessoas agrupadas por nome:", groupedByName);
/*
{
  Alice: [{ name: 'Alice', age: 30 }, { name: 'Alice', age: 25 }],
  Bob: [{ name: 'Bob', age: 20 }]
}
*/

// -------------------------------------------------------------

// Exemplo com índice: Usando o índice no reduce
const indexedSum = numbers.reduce((accumulator, currentValue, index) => {
  console.log(`Índice ${index}: Acumulador = ${accumulator}, Valor Atual = ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log("Soma com índice:", indexedSum); // 15
