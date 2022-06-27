class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    } 
}

const p1 = new Pessoa('Lucas', 'Barreto')
console.log(p1.nomeCompleto)

// O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.

// O método shift()remove o primeiro elemento de um array e retorna esse elemento

// O método join() junta todos os elementos de um array em uma string e retorna esta string.