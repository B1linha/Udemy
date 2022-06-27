// Costumamos chamar de programação assíncrona o ato de executar uma tarefa em "segundo plano", sem nosso controle direto disso.

function random (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function wait (msg, time) {
    return new Promise((resolve, reject) => {
        if ( typeof msg !== 'string') reject('Bad Value')
        setTimeout(() => {
            resolve(msg)
        }, time)
    })
}

wait('Frase 1', random(1000, 3000))
.then(resposta => {
    console.log(resposta)
    return wait('Frase 2', random(1000, 3000))
})
.then(resposta => {
    console.log(resposta)
    return wait(1989, random(1000, 3000))
})
.then(resposta => {
    console.log(resposta)
})
.catch(e => {
    console.log('ERRO', e)
})

//  Em promises você pode "parar" a execução de código posterior para esperar o valor retornado por um código anterior. Em callbacks, o que a gente faz é executar uma função dentro da outra.

// O método then() retorna uma Promise. Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa.

// O método catch() retorna uma Promise e lida apenas com casos rejeitados.