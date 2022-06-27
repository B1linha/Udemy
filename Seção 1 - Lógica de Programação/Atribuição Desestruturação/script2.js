// Object
const pessoa = {
    // chaves
    nome: 'Lucas',
    sobrenome: 'Brito',
    idade: 18,
    endereco: {
        rua: 'Prata',
        numero: 342
    }
};

//       Atribuição via desestruturação 
const {sobrenome, idade: idadeL, altura = 1.73,} = pessoa;
//            mudei o nome da chave e criei altura

const {endereco: {rua, numero}} = pessoa // Acessando o objeto dentro do objeto
const nome = pessoa.nome;
const {idade, ...rest} = pessoa; // Podemos usar o rest nos objetos também

console.log(nome, sobrenome, idadeL, altura);
console.log(rua, numero)
console.log(rest)