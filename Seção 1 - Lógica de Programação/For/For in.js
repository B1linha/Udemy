// Vetor - Array de unica dimensão 
const frutas = ['Pêra', 'Maçã', 'Uva'];
const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Barreto',
    idade: 18
}

// For in -> lê os índices de arrays ou chaves dos objetos
for (let i in pessoa) {
    console.log(i, ':', pessoa[i]);
}