// Arguments sustenta todos os argumentos enviados nos parâmetros
function funcao() {
    console.log(arguments[0])
}
funcao('Valor', 1, 2, 3, 4, 5);

// Arguments não existe em arrow function    
function soma () {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento; 
    }
    console.log(total); 
}
soma(2, 3, 4, 5, 6, 7, 9)

// Atribuição via desestruturação em parâmetros

function obj ({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
obj({ nome: 'Lucas', sobrenome: 'Barreto', idade: 19 })

function arrays ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
arrays(['Lucas', 'Barreto', 19])

const conta = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};
conta('+', 1, 30, 40, 50, 60);