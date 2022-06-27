const nome = ['Lucas', 'Brito', 'Barreto'];

// For clássico
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

// For in
for (let i in nome) { // 'i' me refiro ao índice
    console.log(nome[i])
}

// For of, diferente do clássico e in ele pega os valores e não o índice
for (let valor of nome) { 
    console.log(valor);
}

//ForEach, executa call back par elemento, índice e array
nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})

// for of não funciona em objetos
let pessoa = {
    nome: 'Lucas',
    sobrenome: 'Barreto'
}

for (let chave in pessoa) { 
    console.log(chave, pessoa[chave])
}

// For clássico -> geralmente com iteráveis (arrays ou strings)
// For in -> Retorna o índice ou chave (string, arrays ou objetos)
// For of -> Retorna o valor em si (iteráveis, arrays ou strings)