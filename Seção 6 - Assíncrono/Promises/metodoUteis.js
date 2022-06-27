function random (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function wait (msg, time) {
    return new Promise((resolve, reject) => {

        if ( typeof msg !== 'string') {
            reject('Bad Value')
            return
        }

        setTimeout(() => {
        resolve(msg.toUpperCase() + ' - Passei!')
        }, time)
    })
}


// Promise.all - Promise.race - Promise.resolve - Promise.reject
const promises = [
    wait('First promise', 3000),
    wait('Second promise', 500),
    wait('Third promise', 1000),
    // wait(3000, 1000),
]

// Executa todas as promises
Promise.all(promises)
.then((value) => {
    console.log(value)
})
.catch((error) => {
    console.log(error)
})

// Pega o primeiro valor que for executado na promise
Promise.race(promises)
.then((value) => {
    console.log(value)
})
.catch((error) => {
    console.log(error)
})

function baixaPagina() {
    const emCache = false

    if (emCache) {
        return Promise.resolve('Pagina em cache')
    } else {
        return wait('Baixei a página', 3000)
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => console.log(e))