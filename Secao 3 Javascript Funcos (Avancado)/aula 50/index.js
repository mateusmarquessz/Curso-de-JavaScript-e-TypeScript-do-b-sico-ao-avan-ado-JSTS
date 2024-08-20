function criaPessoa(nome, sobrenome){
    return{
        nome, sobrenome,
        fala: function(assunto){
            return '${this.nome} esta ${assunto}'
        }
    };
}

const p1 = criaPessoa ('Luiz', 'Otavio');
console.log(p1)