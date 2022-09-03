import { nome, sobrenome, idade, soma as somar } from './Module_1'
import Pessoa from './Module_1'

const p1 = new Pessoa(nome, sobrenome)

console.log(p1, idade)
console.log(somar(10, 10))