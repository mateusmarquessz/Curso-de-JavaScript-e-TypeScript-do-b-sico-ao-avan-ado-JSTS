function criaPessoa(nome, sobrenome, idade){
    return{nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('luiz', 'Otavio', 25)
const pessoa2 = criaPessoa('a', 'c', 252)
const pessoa3 = criaPessoa('b', 'd', 235)

console.log(pessoa1.nome, pessoa2.idade, pessoa3.sobrenome);

const per1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} esta falando OI`);
    },

    incrementaIdade(){
        ++this.idade;
    },

    falaIdade(){
        console.log(`Minha idade atual ${this.idade}`)
    }
}

per1.fala();

per1.incrementaIdade();
per1.falaIdade()