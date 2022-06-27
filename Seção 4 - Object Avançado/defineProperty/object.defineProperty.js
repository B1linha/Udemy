// defineProperty - defineProperties
function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor
        writable: true, // Pode alterar valor
        configurable: false // Configurável
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1)); 
console.log(p1);
for (let chave in p1) {
    console.log(chave);
}