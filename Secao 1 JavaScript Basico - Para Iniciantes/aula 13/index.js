let umaString = 'Um "texto" ';

console.log(umaString);
// \ barra invertida serve caracter de espaco dentro da string
// \\ duas para colocar uma barra invertida

//String tem um indice 0 1 2 3 ... 

//concat() concatena uma string
//templat string mt foda  == ${umaString} aaaa

//length retorna o tamanho da string

/*

  document.body.innerHTML += `Seu nome é: ${nome}<br />`; puxando variavel
  document.body.innerHTML += `Seu nome tem  ${nome.length} letras <br />`; a quantidade de letras
  document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`; mostra a primeira letra
  document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome?  ${nome.indexOf("m")}<br />`; mostra o indice
  document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome?  ${nome.indexOf("s")}<br />`;  mostra a ultima letra
  document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`; mostra as ultimas 3 letras
  document.body.innerHTML += `As palavras do seu nome são:  ${nome.split(' ')}<br />`; da espaco nas letras da string
  document.body.innerHTML += `Seu nome com letras maiúsculas:  ${nome.toUpperCase()}<br />`; deixa maiúsculas.
  document.body.innerHTML += `Seu nome com letras minúsculas:  ${nome.toLowerCase()}<br />`; deixa minúsculas.

*/
