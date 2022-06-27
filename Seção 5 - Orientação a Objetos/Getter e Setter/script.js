const _velocidade = Symbol('Velocidade')
// Ctrl + Shift + L -> para selecionar todos do mesmo nome

// Usei a propriedade privada -> [_velocidade] para evitar que possam acessar minha propriedade de fora do objeto

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    // Setter é chamado quando a alteração de valores -> c1.velocidade = 99
    set velocidade(valor) {
        if (typeof valor !== 'number') return
        if (valor >= 100 || valor <= 0) return
        this[_velocidade] = valor
    }

    // Getter é chamado quando o valor é solicitado -> console.log(c1.velocidade)
    get velocidade() {
        return this[_velocidade]
    }

    acelerar() {
        if (this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    freiar() {
        if (this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca')

for (let i = 0; i <= 200; i++) {
    c1.acelerar()
}

c1.velocidade = 30
console.log(c1.velocidade)