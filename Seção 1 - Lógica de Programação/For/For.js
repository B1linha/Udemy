// i - index (padrão no us ? 'par' : 'impar';o de for)
// i += (number) para aumentar e -= para dminuir

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

const frutas = ['Maça', 'Pêra', 'Uva'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`,frutas[i]) // Usando o for para repetir array
}