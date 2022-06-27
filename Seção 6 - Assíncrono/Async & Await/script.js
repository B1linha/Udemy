function random (min = 0, max = 3000) {
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

// wait('Fase 1', random())
// .then(value => {    
//     console.log(value)
//     return wait('Fase 2', random())
// })
// .then(value => {
//     console.log(value)
//     return wait('Fase 3', random())
// })
// .then(value => {
//     console.log(value)
// })
// .catch(e => console.log(e))

async function execute() {
    try {
        // Não usei o await, então ela está em pending
        const fase1 = wait('Fase 1', random()) 
        console.log(fase1)
    
        // Ela está em rejected
        const fase2 = await wait(2, random())
        console.log(fase2)
        
        // Essa está fullfilled
        const fase3 = await wait('Fase 3', random())
        console.log(fase3)
    
        console.log('Terminamos na fase:', fase3)
    } catch(e) {
        console.log('Tivemos um ERRO!' +' ' + e)
    }
}

execute()

// 3 Estados das promises
// Pending -> pendente
// Fullfilled -> realizada
// Rejected -> rejeitada