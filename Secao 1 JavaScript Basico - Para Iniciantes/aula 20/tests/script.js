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

        const nome = form.querySelector('.Nome');
        const sobrenome = form.querySelector('.Sobrenome');
        const peso = form.querySelector('.Peso');
        const altura = form.querySelector('.Altura');
    
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
                

        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value}` + `${peso.value} ${altura.value}</p>`
    }
    form.addEventListener('submit',recebeEventoForm);
}
meuEscopo();