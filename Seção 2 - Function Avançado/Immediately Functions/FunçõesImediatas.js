// Método tradicional

function qualquerCoisa() {
    console.log(12345)
}
qualquerCoisa();

// IIFE -> Immediately invoked function expression

// É uma função em JavaScript que é executada assim que definida e contém duas partes. 
// A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE.
// A segunda parte corresponde à criação da expressão (), por meio da qual o interpretador JavaScript avaliará e executará a função.

(function(nome, idade, peso, altura) {
    
    function pessoa() {
        let fala = `${nome}, ${idade}, ${peso}, ${altura}`
        return fala
    }
    console.log(pessoa())

})('Lucas', 18, 55, 1.70);
