// Versão do Lucas
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

function criaP () {
    const p = document.createElement(elementos[0].tag);
    return p;
}

function criaD () {
    const p = document.createElement(elementos[1].tag);
    return p;
}

function criaF () {
    const p = document.createElement(elementos[2].tag);
    return p;
}

function criaS () {
    const p = document.createElement(elementos[3].tag);
    return p;
}

function result (msg, msg1, msg2, msg3) { 
    const resultado = document.querySelector('#res');
    resultado.innerHTML = ''; 

    const p = criaP();
    const d = criaD();
    const f = criaF();
    const s = criaS();

    p.innerHTML = msg;
    d.innerHTML = msg1;
    f.innerHTML = msg2;
    s.innerHTML = msg3;

    resultado.appendChild(p);
    resultado.appendChild(d);
    resultado.appendChild(f);
    resultado.appendChild(s);
}

result(elementos[0].texto, elementos[1].texto, elementos[2].texto, elementos[3].texto)