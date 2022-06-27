// Produto -> aumento, desconto
// Camiseta = cor, caneca = material

function Produto(nome, preço) {
    this.nome = nome
    this.preço = preço
}

Produto.prototype.aumento = function(quantia) {
    this.preço += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preço -= quantia
}

function Camiseta(nome, preço, cor) {
    Produto.call(this, nome, preço)
    this.cor = cor
}

function Caneca(nome, preço, material, estoque) {
    Produto.call(this, nome, preço)
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}

// Ao definir o prototype de Camiseta igual ao de Produto, isso faz o construtor passa a ser Produto e não mais Camiseta
Camiseta.prototype = Object.create(Produto.prototype)
Caneca.prototype = Object.create(Produto.prototype)

// Defini o construtor para ser novamente Camiseta
Camiseta.prototype.constructor = Camiseta
Caneca.prototype.constructor = Caneca

const produto = new Produto ('Caneca', 8.7)
const camiseta = new Camiseta('Regata', 7.5, 'Preto')
const caneca = new Caneca('Xícara', 10.25, 'Porcelana', 500)

Camiseta.prototype.aumento = function(percentual) {
    this.preço = this.preço + (this.preço * (percentual / 100))
}

// Engina procura em Object -> Camiseta.prototype -> Produto.prototype -> Object.prototype

camiseta.aumento(100)


console.log(produto)
console.log(camiseta)
console.log(caneca)
