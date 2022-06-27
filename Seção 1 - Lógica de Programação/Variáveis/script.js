// Tipos de variáveis 
nome = 'Luiz'; // Não faça isso
console.log(nome)
var nome2 = 'Joao'  //Não utilizar mais var
let nome3 = 'Lucas' //Let é o mais usado
const nome4 = 'Matheus' //Variavel imutável
/*
var tem um escopo global enquanto fora de uma function, var pode ser redeclarado varias vezes.
Podemos fazer um 'hoisting' que eleva a variável para o topo de seu escopo.
Problemas com var:
*/
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
}

console.log(greeter) // "say Hello instead"
/* Se você usou greeter em outras partes do seu código, pode se surpreender com a saída que poderá obter. Isso provavelmente causará muitos bugs em seu código. É por isso let e const são necessários.
*/

/* let tem um escopo de bloco, let pode ser atualizado mas não redeclarada.
let se definido em escopos diferentes são tratadas como váriaveis diferentes.
*/

/* const tem um escopo de bloco, const não pode ser atualizado e nem redeclarado.
*/