class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} está ligado`)
            return
        }
        this.ligado = true
    }

    desligar() {
        if (! this.ligado) {
            console.log(`${this.nome} já está desligado`)
            return
        }
        this.ligado = false
    }
}

class Smartphones extends Dispositivo {
    constructor(nome, cor) {
        super(nome) // no caso de usar extends, você precisar usar o super
        this.cor = cor
    }

    ligar() {
        console.log('Você alterou o método ligar')
    }
}

const s1 = new Smartphones('Iphone', 'Preto')
s1.ligar() // Se ele não achar o método ligar nesse proto, ele vai procurar no proto do pai dele -> Dispositivo