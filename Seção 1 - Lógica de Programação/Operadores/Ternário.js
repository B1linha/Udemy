// Operadores ternários
// (condition) ? 'Value for true' : 'Value for false'
const punctuation = 500;
const nivel = punctuation >= 1000 ? 'User VIP' : 'User normal';

const colorUser = null;
const patternColor = colorUser || 'preto';

console.log(nivel, patternColor); 