// Escreva uma função chamada ePaisagem que receba dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.
// Paisagens tem no mínimo: 1080 x 608

function ePaisagem(largura, altura) {
    if (largura > altura) {
        console.log(true)
    }else {
        console.log(false)
    }
}

ePaisagem(100, 608)

// Método do professor

const ePaisagem2 = (largura, altura) => largura > altura;