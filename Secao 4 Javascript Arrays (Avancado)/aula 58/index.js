// Exemplo básico: Dobrar os valores de um array
const numbers = [1, 2, 3, 4, 5];

// O método map aplica uma função em cada elemento e retorna um novo array
const doubled = numbers.map(num => num * 2);

console.log("Array original:", numbers); // [1, 2, 3, 4, 5]
console.log("Array dobrado:", doubled);  // [2, 4, 6, 8, 10]

// -------------------------------------------------------------

// Exemplo com objetos: Extrair informações de um array de objetos
const users = [
  { id: 1, name: 'João' },
  { id: 2, name: 'Maria' },
  { id: 3, name: 'Carlos' }
];

// Usando map para criar um array apenas com os nomes
const names = users.map(user => user.name);

console.log("Nomes extraídos:", names); // ['João', 'Maria', 'Carlos']

// -------------------------------------------------------------

// Exemplo com índice: Usando o índice durante a transformação
const baseNumbers = [10, 20, 30];

// Adiciona o índice ao valor do elemento
const withIndex = baseNumbers.map((num, index) => num + index);

console.log("Valores com índice somado:", withIndex); // [10, 21, 32]

// -------------------------------------------------------------

// Diferença entre map e forEach
// Usando forEach (não retorna um novo array)
numbers.forEach((num, index) => {
  console.log(`Valor dobrado (${index}):`, num * 2); // Apenas exibe os valores
});

// Usando map (cria um novo array com os valores transformados)
const doubledMap = numbers.map(num => num * 2);
console.log("Novo array criado com map:", doubledMap); // [2, 4, 6, 8, 10]
