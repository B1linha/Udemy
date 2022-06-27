// Dentro de uma função, o valor de this depende de como a função é chamada. 
// Nesse caso o this se refere ao objeto que chamou ele.

// Factory Function (Função Fábrica)    
function criaPessoa (nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            // O método join() junta todos os elementos de uma array em uma string e retorna esta string.
            this.sobrenome = valor.join(' ');
        },

        peso: p,
        altura: a,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return `Seu IMC é ${indice.toFixed(2)}`;
        }
    };
}
// This.peso é a mesma coisa de p1.peso

const p1 = criaPessoa('Lucas', 'Barreto', 1.70, 55);
console.log(p1.nomeCompleto)
p1.nomeCompleto = 'Maria Oliveira Silva';   
console.log(p1.nome, p1.sobrenome);
console.log(p1.imc)

// A sintaxe set liga a propriedade da função para ser chamada quando existe uma tentativa de definir valor para essa propriedade.

// A sintaxe de get associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada.