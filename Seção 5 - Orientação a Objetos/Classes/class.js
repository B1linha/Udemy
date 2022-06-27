class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`)
}

// Instanciar é criar um objeto a partir da classe (molde)
const p1 = new Pessoa('Lucas', 'Barreto')
const p2 = new Pessoa2('Matheus', 'Barreto')

console.log(p1.falar())
console.log(p2.falar())