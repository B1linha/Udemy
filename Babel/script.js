class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.idade = sobrenome
        this.idade = idade
    }

    aumentaIdade() {
        this.idade++
        console.log(`A idade de ${this.nome} agora é ${this.idade}`)
    }
}

let p1 = new Pessoa('Lucas', 'Barreto', 19)
p1.aumentaIdade()

// npm run babel