// escopo léxico é todo o "lugar" aonde você pode acessar a variável, sempre ela sera buscada no escopo maior até chegar no global.

// A function consegue usar os vizinhos dela
const nome = 'Lucas'

function falaNome () {
    const nome = 'Brito'
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'Barreto'
    falaNome();
}
usaFalaNome();