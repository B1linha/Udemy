try {
    console.log(naoExisto);
} catch(error) {
    console.log('naoExisto não existe!')
}

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');
    }
    return x + y;
}

// Se ocorrer algum erro no try, executa catch
// Se não ocorrer algum erro no try, executa try
try { 
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error){
   // console.log(error)
   console.log('')
}
