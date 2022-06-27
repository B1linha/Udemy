function Produto(nome, preço) {
    this.nome = nome
    this.preço = preço    
}

Produto.prototype.desconto = function(percentual) {
    this.preço = this.preço - (this.preço * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preço = this.preço + (this.preço * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)

// Literal
const p2 = {
    nome: 'Caneca',
    preço: 15
}
Object.setPrototypeOf(p2, p1)

p2.aumento(100)
console.log(p1)
console.log(p2)

// Reaproveitei as funções aumento e desconto do meu p1 com o construtor Produto, no meu objeto literal p2. Setando o prototype do p2 igual o do p1!


const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40
    },
    preço: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 115
    }
})
p3.aumento(10)
console.log(p3)
