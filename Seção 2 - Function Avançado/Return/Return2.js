// Return de function dentro de functions

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    } 
    return falaResto;
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('Mundo!'))
console.log(falaFrase('Olá')('Mundo!')) // Outro método

// Como isso é útil nos codes:

function multiplicadores(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = multiplicadores(2);
const triplica = multiplicadores(3);
const quadriplica = multiplicadores(4);

console.log(duplica(2), triplica(2), quadriplica(2))
console.log(multiplicadores(2)(2), multiplicadores(3)(2), multiplicadores(4)(2)) // Outro método