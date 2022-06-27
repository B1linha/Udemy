// Escreva uma função que receba um número e retorne o seguinte: 
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o número ou string
// Use a função com números de 0 a 100 

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';

    }else if (num % 3 === 0) {
        return 'Fizz';

    }else if (num % 5 === 0) {
        return 'Buzz';

    }else if (num != Number) {     
        return num;

    }else {
        return num;
    }
}
for (let i = 0; i <= 100; i++){
    console.log(fizzBuzz(i))
}
//Modelo do professor

function FizzBuzz2(numero) {
    if (typeof numero !== 'number') return NaN;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}