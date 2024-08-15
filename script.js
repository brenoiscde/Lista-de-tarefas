let listaTarefas = [];

function addTarefa() {
    // Obter o valor do input
    let tarefa = document.querySelector("#taskInput").value.trim();

    // Verificar se a tarefa não está vazia
    if (tarefa === '') {
        alert('Digite uma tarefa');
        return;
    }

    // Adicionar a tarefa à lista
    listaTarefas.push(tarefa);

    // Atualizar a lista no HTML
    let taskList = document.querySelector("#taskList");
    // Limpar a lista existente
    taskList.innerHTML= '';

    // Adicionar cada tarefa como um item da lista
    for(let i = 0; i < listaTarefas.length; i++){
        let li = document.createElement('li');
        li.textContent = i + ". " + listaTarefas[i]
        taskList.appendChild(li)
    }

    // Limpar o campo de input
    document.querySelector("#taskInput").value = '';
}

// Adicionar um listener de evento ao botão
let botao = document.querySelector("#addTaskButton");
botao.addEventListener('click', addTarefa);
