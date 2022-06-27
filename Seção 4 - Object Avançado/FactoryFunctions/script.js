// Criar métodos dentro da função construtora, vai criar métodos em todos os filhos dela e vai consumir muito recurso
// Criar prototypes é mais performático

const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    },
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    },
}
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}
const pessoaPrototype = Object.assign({}, falar, comer, beber)

 
function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Luiz', 'Otávio')
console.log(p1)