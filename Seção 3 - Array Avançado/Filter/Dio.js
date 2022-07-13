function filterPar(array) {
    return array.filter(function (item) {
        if (item % 2 === 0) return item
        return
    })
}

const numbers = [2, 4, 5, 6, 9, 13, 15, 20, 21]

console.log(filterPar(numbers))