//                0          1           2
const alunos = ['Lucas', 'Matheus', 'Guilherme',];
alunos[0] = 'Eduardo'; // Modificando a array
alunos[3] = 'Felipe';  // Adicionando índice na array
alunos.push('Domingos'); // Adiciona no final da array
alunos.unshift('Nira') // Adiciona no começo da array
alunos.pop(); // Remove o último índice da array
alunos.shift(); // Remove o primeiro índice da array
delete alunos[1]; // Deletas um índice da array sem modificar as outras
console.log(alunos[0]); // Chamando o índice 0 da array
console.log(alunos);
console.log(alunos.length); // Mostra o tamanho da array
console.log(alunos.slice(0, 3)); // Fatia a array do 0 até o 2
console.log(typeof alunos); // Demonstra que uma array é um objeto
console.log(alunos instanceof Array); // Pergunta se a const alunos é uma array

// Quando usamos const  com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados
// A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.
/* Isso pode:

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode:

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable. */