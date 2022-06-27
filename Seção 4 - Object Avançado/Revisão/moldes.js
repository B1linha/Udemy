// Factory functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

function Pessoa(nome, sobrenome) { // Constructor Function
    this.nome = nome;
    this.sobrenome = sobrenome;
    // Object.freeze(this); travando todas as alterações de valores
    // Funciona com arrays também
}

const p1 = criaPessoa('Lucas', 'Barreto');

Object.freeze(p2) // Travei a alteração de valores do p2
// {} <- this -> this (Cria o objeto, atrela o this e retorna o this)
const p2 = new Pessoa('Lucas', 'Barreto');
// p1.nome = 'Outra coisa', é possível

console.log(p1.nomeCompleto); // Não precisei chamar com os '()' pois estou usando o get, funcionaria sem o get também!
console.log(p2);