let num0 = 9
let num1 = 9.542342;
let num2 = Math.floor(num1); //Arredonda para baixo o número
let num3 = Math.ceil(num1); // Arredonda para cima o número
let num4 = Math.round(num1); // Arredonda para o mais próximo
console.log(num2, num3, num4);
console.log(Math.max(1,2,3,4,5,-10,-50,100,150,1500,5300)); // Mostra o maior número dentro da sequência
console.log(Math.min(1,2,3,4,5,-10,-50,100,150,1500,5300)); // Mostra o menor número dentro da sequência
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Número aleatorio entre 5 e 10
console.log(aleatorio);
console.log(Math.PI); // Valor de PI
console.log(Math.pow(2, 10)); // 2 elevado a 10
console.log(num0 ** 0.5); // Pegar raiz quadrada de um número
console.log(100 / 0) // Em outras linguagens apresenta erro, no Javascript é um valor Infinity
// Infinity em Booleano apresenta resultado true