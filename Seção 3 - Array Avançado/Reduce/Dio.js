// function sumNumbers(array) {
//     return array.reduce((previousValue, currentValue) => {
//         return previousValue + currentValue
//     })
// }

// const array = [3, 5, 10, 22, 32]

// console.log(sumNumbers(array))

function calculaSaldo(saldo, lista) {
    return lista.reduce((prev, current, index) => {
        console.log('Rodada' + ' ' + index)
        console.log(prev)
        console.log(current)
        return prev - current.value
    }, saldo)
}

const lista = [
    { item: 'Sabão', value: 20 },
    { item: 'Detergente', value: 35 },
    { item: 'Salgadinho', value: 50}
]

const saldo = 250

console.log(calculaSaldo(saldo, lista))
