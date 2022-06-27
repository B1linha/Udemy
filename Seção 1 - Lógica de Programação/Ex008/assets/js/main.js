function pegaSegundos(milissegundos) {
    const data = new Date(milissegundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar'); 
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos ++;
        relogio.innerHTML = pegaSegundos(segundos);
    }, 1000)
    return timer;
}

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado')
    relogio.classList.add('iniciado')
    clearInterval(timer); // Evitar que o contador acumule timers
    iniciaRelogio();
}); 

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.remove('iniciado')
    relogio.classList.add('pausado')
});

zerar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado')
    relogio.classList.remove('iniciado')
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});

// Outro método para usar o addEventListener, é usar ele direto no document e não nos botões

// Nesse caso abaixo funcionaria do mesmo jeito e teria uma performance melhor, do que criar varios addEventListener

/*document.addEventListener('click', function(event) {
    if(event.target.classList.contains('iniciar')) {
        timer = setInterval(function() {
            segundos ++;
            relogio.innerHTML = pegaSegundos(segundos);
        }, 1000)
        return timer;
    }
}) */