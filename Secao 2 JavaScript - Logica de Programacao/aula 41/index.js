 function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
 }

 //Serve para configurar um intervalo de tempo para que uma funcao seja executada em determinado momento
const timer = setInterval(function(){
   console.log (mostraHora())}
    , 1000);

//A mesma coisa a diferenca e que executa uma vez so

setTimeout(function(){
    clearInterval(timer);
}, 3000);


setTimeout(function()  {
    console.log('Ola mundo!');
}, 5000);