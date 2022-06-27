// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

// Some todos os números
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
     acumulador += valor;
     return acumulador
}, 0); // Valor inicial do acumulador

//console.log(total);

const pares = numeros.reduce((acumulador, valor, indice, array) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []) // Acumulador vai ser um array
//console.log(pares);

const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, [])
//console.log(dobro)

// Lembrando -> O método push() adiciona um ou mais elementos ao final de um array


// Retorne a pessoa mais velha 
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 }
]

const maisVelha = pessoas.reduce((acumulador, valor, indice, array) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
},) // Se eu não passar um valor inicial para o acumulador, ele vai ser o primeiro objeto e o valor vai ser o segundo objeto

console.log(maisVelha)