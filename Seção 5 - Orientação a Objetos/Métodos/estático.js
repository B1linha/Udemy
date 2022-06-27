class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume() {
        this.volume += 2
        console.log(this.volume)
    }

    // Método de instância
    diminuirVolume() {
        this.volume -= 2
        console.log(this.volume)
    }

    // Método estático, não tem acesso aos dados do constructor
    static trocaPilha() {
        console.log('Okay, vou trocar!')
    }
}

ControleRemoto.trocaPilha()

const c1 = new ControleRemoto('Samsung')
c1.aumentarVolume()

console.log(Math.random())