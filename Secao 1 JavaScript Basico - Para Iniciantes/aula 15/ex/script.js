const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p> Raiz quadrada e ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p> ${numero} e inteiro ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p> Arrendondado para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> Arrendondado para cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> Duas Casa Decimais ${numero.toFixed(2)}</p>`;