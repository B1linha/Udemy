// defineProperty -> Getter e Setter
// prefixo get que tem a função de retornar um valor, e outro precedido pela palavra set que serve para atribuir um valor

function Produto(nome, preco, estoque) {
    this.nomes = nome;
    this.preco = preco;
    let estoquePrivado = estoque;   
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor != 'number') {
                throw new TypeError('Digite um número')
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'a'
console.log(p1.estoque);