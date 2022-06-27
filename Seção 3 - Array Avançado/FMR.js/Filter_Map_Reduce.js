// Retorne a soma do dobro de todos os pares

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const pares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor)

console.log(pares)

// [ 50, 80, 2, 4, 8, 22 ]
// [ 100, 160, 4, 8, 16, 44 ]
// 332