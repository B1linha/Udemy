try {
    // É executado quando não há erros
} catch (e) {
    // É executado quando há erros
} finally {
    // Sempre
}

function retornaHora (data) {
    if (data && !(data instanceof Date)) { //O operador instanceof testa a presença da função construtora 
        throw new TypeError('Esperando instância de Date.'); // Lançando erro para o usário
    }
    if (!data) {
        data = new Date();
    }

    // O método toLocaleTimeString() retorna uma string com uma representação sensível ao idioma de uma porção de tempo desta data.
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date ('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch(error) {
    // Trata erro
} finally {
    console.log('Tenha um bom dia!')
}