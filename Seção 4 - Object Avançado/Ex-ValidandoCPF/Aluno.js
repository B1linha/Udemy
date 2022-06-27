let valid = '705.484.450-52'
let cpf = '705.484.450'
let cpfS = cpf.replace(/\D+/g, '') // Expressão regular que limpa tudo que não for número
let cpfLimpo = Array.from(cpfS) // Convertendo para Array

function validCPF(cpf) {
    let numbers = cpf.map(x => parseInt(x, 10))
    let mult = [
        numbers[0] * 10,
        numbers[1] * 9,
        numbers[2] * 8,
        numbers[3] * 7,
        numbers[4] * 6,
        numbers[5] * 5,
        numbers[6] * 4,
        numbers[7] * 3,
        numbers[8] * 2
    ]

    let total = mult.reduce((acumulador, valor, indice, array) => {
        acumulador += valor, 0
        return acumulador
    })

    let calc = 11 - (total % 11)
    return calc
}

function secondDigit(array, value) {
    let numbers = array
    numbers.push(value)
    let mult = [
        numbers[0] * 11,
        numbers[1] * 10,
        numbers[2] * 9,
        numbers[3] * 8,
        numbers[4] * 7,
        numbers[5] * 6,
        numbers[6] * 5,
        numbers[7] * 4,
        numbers[8] * 3,
        numbers[9] * 2
    ]
    let total = mult.reduce((acumulador, valor, indice, array) => {
        acumulador += valor, 0
        return acumulador
    })
    let calc = 11 - (total % 11)
    return calc
}

let a = validCPF(cpfLimpo)
let b = secondDigit(cpfLimpo.map(x => parseInt(x, 10)),validCPF(cpfLimpo))

let n1 = a + ''
let n2 = b + ''

cpfLimpo.push(n1, n2)
copia = [...cpfLimpo]
toString(copia)

console.log(copia === valid)
console.log(copia)