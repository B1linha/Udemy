// Closure é a habilidade que a function tem de acessar seu escopo léxico

function retornaFuncao() { 
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Lucas');
const funcao2 = retornaFuncao('Matheus');

console.dir(funcao);
console.dir(funcao2);