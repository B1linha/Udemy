//Atribuição via desestruturação (Arrays)
// é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

let a = 'A';
let b = 'B';
let c = 'C';

[a, b, c] = [1, 2, 3];

console.log(a, b, c);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [firstNumber, secondNumber, ...rest] = numbers; // ...rest seleciona todos os índices que sobraram
const [um, três, cinco] = numbers; // Pulando índices da array
// ... rest, ... spread
const numeros = [
//      0          1          2
//   0  1  2    0  1  2    0  1  2     
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]

console.log(firstNumber, secondNumber);
console.log(rest); // Pega o resto da array
console.log(um, três, cinco);
console.log(numeros[1][2])