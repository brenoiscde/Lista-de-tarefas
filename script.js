// 1. Criando a lista
const listaTarefas = [];
// 2. Funcao exibindo as tarefas
function exibirTarefa(tarefainput){
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = ""
    for(let i = 0; i < listaTarefas.length; i++ ){
        taskList.innerHTML += `
        <li> ${i + 1}.
        ${listaTarefas[i]}
        <button onclick="removeTarefa(${i})">Delete</button>`;
    }
    tarefainput.value = ""
    
}
// 3. Adicionando as tarefas
function addTarefas(){
    let inputTarefa = document.getElementById('taskInput')
    let tarefa = document.getElementById('taskInput').value;
    listaTarefas.push(tarefa);

    exibirTarefa(inputTarefa)
}
// 4. Funcao remove tarefas
function removeTarefa(indice){
    listaTarefas.splice(listaTarefas[indice],1)
    exibirTarefa()
}
// 5. Funcao verificar se o input tem algo
function verificaInput(){
    let tarefa = document.getElementById('taskInput').value;
    if(tarefa){
        addTarefas()
    }
    else{
        alert('O input está vazio.')
    }
}
// 6. Adicionando evento do botao
const botao = document.getElementById('addTaskButton');
botao.addEventListener('click', verificaInput)
