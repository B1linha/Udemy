// Requisição Ajax
fetch('pessoas.json')
    .then(resposta => resposta.json()) // retorna uma nova promise
    .then(json => carregaDados(json))

function carregaDados(dados) {
    const table = document.createElement('table')

    // Iterando em cada objeto do json
    for(let pessoa of dados) {
        const tr = document.createElement('tr') // Linha da tabela
        
        let td = document.createElement('td') // Coluna da tabela
        td.innerHTML = pessoa.nome
        tr.appendChild(td)

        let td2 = document.createElement('td')
        td2.innerHTML = pessoa.idade
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerHTML = pessoa.salario
        tr.appendChild(td3)

        table.appendChild(tr)

        console.log(pessoa.nome)
    }

    const res = document.querySelector('.resultado')
    res.appendChild(table)
}

// Fetch e axios são duas coisas diferentes, fetch é uma API do próprio browser, o axios simplesmente é uma lib que utiliza XHR e retorna no formato de promises.