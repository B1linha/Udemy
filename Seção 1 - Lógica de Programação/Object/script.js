function criaPessoa (nome, sobrenome, idade) { // Function de criar nomes
    return { // retorna um objeto
        nome,
        sobrenome,
        idade
    };
}
const pessoa1 = criaPessoa('Lucas', 'Brito', 18); // Substitui os parâmetros com argumentos
const pessoa2 = criaPessoa('Matheus', 'Brito', 19);
const pessoa3 = criaPessoa('Guilherme', 'Brito', 20);
console.log(pessoa1.nome)

const pessoa = { // Objeto literal
    nome: 'Lucas',
    sobrenome: 'Brito',
    idade: 18,
    fala () { // Criando uma function dentro do objeto, que se denomina método
        console.log(`A idade de ${this.nome} ${this.sobrenome} é: ${this.idade}. `) // Nesse contexto "this" represeta o objeto pessoa
    },
    incrementaIdade() {
        ++this.idade // ++ o operador de incremento, está sendo usado como pré-incremento
    }
};
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
