const pessoa = new Object(); // Construtor
pessoa.nome = 'Lucas';
pessoa.sobrenome = 'Barreto';
pessoa.idade = 18;
pessoa.falarNome = function() {
    console.log(`${this.nome} está falando`)
};
pessoa.getDataNascimento = function() {
    const data = new Date();
    console.log(`${this.nome} nasceu em ${data.getFullYear() - this.idade}`)
} 

delete pessoa.sobrenome

console.log(pessoa);
pessoa.falarNome();
pessoa.getDataNascimento();

for (chave in pessoa) {
    console.log(pessoa[chave]);
}
