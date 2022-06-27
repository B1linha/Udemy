// Return devolve um valor e termina a função

// As duas funções levam ao mesmo resultado, porém:

function soma(a, b) {
    return a + b;
}
console.log(soma(5, 2));
// A primeira função pode ser usada em diversas situações pois ela retorna um valor

function soma2(a, b) {
    console.log(a + b);
}
soma2(5, 2)
// A segunda função apenas exibe a soma e não pode ser usada além disso


// Essa função não retorna nenhum valor, mas executa uma ação
// Tudo vai depender do contexto do que estamos precisando

document.addEventListener ('click', function() {
    document.body.style.backgroundColor = 'red'
})