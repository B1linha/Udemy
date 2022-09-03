export const nome = 'Lucas';
export const sobrenome = 'Barreto';
export const idade = 18;

export function soma (x, y) {
    return x + y;
}

export default class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
