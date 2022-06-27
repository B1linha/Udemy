/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - arrays, objects, function
*/
/*
No caso de valores Primitivos os dados são copiados

Nos valores de Referência os dados não são copiados e sim referênciados a um dado
na memória do computador
*/
let a = [1, 2, 3];
let b = a;
let c = b; // Os valores vão referênciando uns aos outros até chegar no dado
let d = [...a]; //Nesse caso o valor d copia o valor a e se torna independente de a
// Ele não vai apontar para o mesmo valor na memória que a
a.push('Lucas')
console.log(c)
console.log(d)