// Valor por referência 

// const nomes = ['Lucas', 'Matheus', 'Guilherme'];
// const novo = nomes.slice(1, -2);
// console.log(novo);

const nome = 'Lucas Brito Barreto';
const nomes = nome.split(' '); // Separando string em array
console.log(nomes);

const nome1 = ['Lucas', 'Brito', 'Barreto'];
const nomes1 = nome1.join(' '); // Juntando array em string
console.log(nomes1);

// O método split() divide uma String em uma lista ordenada de substrings.
// O método join() junta todos os elementos de um array em uma string e retorna esta string.