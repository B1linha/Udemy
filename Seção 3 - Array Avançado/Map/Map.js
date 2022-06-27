// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map(valor => valor * 2);
//console.log(dobro);

//Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const string = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj =>  {
    const newObjIdades = {...obj};
    delete newObjIdades.nome;
    return newObjIdades;
})
const chaves = pessoas.map((obj, indice) => {
    const newObjId = { ...obj}; // Utilizei spread
    newObjId.id = indice; // Se eu tivesse usado o obj, eu estaria alterando o obj pessoas.
    return newObjId;
})

console.log(chaves);

// Objetos, Arrays e Funções não são copiados, são passados por referência.