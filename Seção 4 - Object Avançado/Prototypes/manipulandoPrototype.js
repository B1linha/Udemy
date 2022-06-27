// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    // __proto__: objA
}

// O método Object.setPrototypeOf() configura o prototype de um objeto específico para outro objeto
Object.setPrototypeOf(objB, objA)
console.log(objB.chaveA)

// Não é recomendável alterar o __proto__, se quiser maninuplar prototype use Object.getPrototypeOf()