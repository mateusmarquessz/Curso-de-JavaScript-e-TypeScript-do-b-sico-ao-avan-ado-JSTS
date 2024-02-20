function meuEscopo(){

    //selecionando objetos do html
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    /* uma maneira de para o recarregar da pagina quando enviado o form
    form.onsubmit = function(evento) {
        evento.preventDefault();
        alert(1);
    };
    */


    //pegando valores nome.value
    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
    
        

        console.log(pessoas);
    }
    form.addEventListener('submit',recebeEventoForm);
}
meuEscopo();