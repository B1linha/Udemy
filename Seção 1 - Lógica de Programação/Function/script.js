function soma(x, y) { // x e y são os pârametros da function
    const resultado = x+y;
    return resultado; // Encerra a function e indica o que vai retornar da function
} // Tudo que está dentro do escopo da function não se pode acessar por fora e nem modificar
const resultado = soma(2, 2);
console.log(resultado)

const raiz = function (n) { // Criando function dentro de uma váriavel 
    return n ** 0.5;
}; // Nese aso precisa de ";"
console.log(raiz(9));

const potenciação = n => n**2; // Novo método de criar function simples - Arrow Function 
console.log(potenciação(3))