const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); // focus() Permite continuar digitando em um campo sem clicar nele
}

function botaoApagar(li) {
    li.innerHTML += ' '; // Da um espaço entre o texto e o botão
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
} 

function criaTarefa(texto) {
    const li = criaLi();
    li.innerHTML = texto;
    tarefas.appendChild(li);
    limpaInput();
    botaoApagar(li);
    salvarTarefas();
}

inputTarefa.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) { // 13 é o code do ENTER
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
        
}});


btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
});

document.addEventListener('click', function(event) {
    const el = event.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas); // Converti a array para string
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // Converti a string para array

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas();