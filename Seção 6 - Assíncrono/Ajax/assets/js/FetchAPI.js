document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    
    if (tag === 'a') {
      e.preventDefault();
      carregaPagina(el);
    }
});
    
function carregaPagina(el) {
    const href = el.getAttribute('href')

    fetch(href)
        .then(response => {
            if (response.status !== 200) throw new Error('ERRO 404!')
            return response.text()
        })
        .then(html => carregaResultado(html))
        .catch(e => console.warn(e))
}

function carregaResultado(response) {
    const resultado = document.querySelector('.res');
    resultado.innerHTML = response;
}

    