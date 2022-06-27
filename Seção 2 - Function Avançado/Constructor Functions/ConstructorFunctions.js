/*
Função Construtora -> objetos
Função Fábrica -> objetos
Contrutora -> pessoa (new)
Fábrica -> criaPessoa ()
*/

// O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
function Pessoa (nome, sobrenome) {
    // Atributos ou métodos privados
    const id = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método')
    }

};

const p1 = new Pessoa ('Lucas', 'Barreto');
const p2 = new Pessoa ('Matheus', 'Barreto');

console.log(typeof p1.nome)
p1.metodo() 