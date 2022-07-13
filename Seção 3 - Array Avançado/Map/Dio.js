const apple = {
    value: 2
}

const orange = {
    value: 3
}

const banana = {
    value: 4
}

const numbers = [1, 4, 7, 10]

function mapWithThis(array, thisArg) {
    return array.map(function (item)  {
    return item * this.value
    }, thisArg)
}

console.log('this -> apple', mapWithThis(numbers, apple))

console.log('this -> orange', mapWithThis(numbers, orange))