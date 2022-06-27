/* Já vimos
Object.keys (retorna chaves)
Object.freeze (congela o objeto)
Object.defineProperty (define uma propriedade)
Object.defineProperties (define várias propriedades)
*/
const produtos = {nome: 'Caneca', preco: 1.8};
const outraCoisa = produtos; // Apontando para o mesmo endereço na memória
const outroNome = {
    ...produtos,
    material: 'porcelana'
}; // spread operator

const caneca = Object.assign({}, outroNome, {estoque: 100}); // Outro método de cópiar
Object.defineProperty(produtos, 'nome', {
    writable: false,
    configurable: false,
    value: 'Prato'
});
delete produtos.nome;

console.log(produtos);
console.log(Object.getOwnPropertyDescriptor(produtos, 'preco'));
console.log(Object.values(produtos));
for (let valor of Object.entries(produtos)) {
    console.log(valor[0], valor[1]);
}