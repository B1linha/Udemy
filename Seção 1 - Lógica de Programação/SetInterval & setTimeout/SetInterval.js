function mostraHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// No setInterval você apenas passa a referência da function e não executa ela com o ()
// No segundo parâmetro você seta o tempo em milissegundos
const timer = setInterval(function () { // Usei uma function anônima
    console.log(mostraHora());
}, 1000 );

setTimeout(function() {
    clearInterval(timer);
}, 10000)