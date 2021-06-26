// Usei o exercicio da piramide do bloco 5 como referencia para o window.onload
const botao = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

// Cria a tarefa e deixa o input em branco
function criaTarefa() {
  const tarefa = document.createElement('li');
  // Referencia da propriedade value https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup_addeventlistener
  tarefa.innerText = input.value;
  tarefa.className = 'tarefa';
  listaTarefas.appendChild(tarefa);
  input.value = '';
}
botao.addEventListener('click', criaTarefa);

// Ao selecionar uma tarefa, pinta esse de cinza e descolore o resto.
function pintaSoUm(event) {
  const x = event.target;
  for (let i = 0; i < listaTarefas.childElementCount; i += 1) {
    listaTarefas.children[i].style.backgroundColor = 'white';
  }
  x.style.backgroundColor = 'rgb(128, 128, 128)';
}
listaTarefas.addEventListener('click', pintaSoUm);

// Ao dar duplo clique em uma tarefa, risca. Tira o risco ao dar o duplo clique denovo.
function riscaTarefaCompletada(event) {
  const x = event.target;
  if (x.className === 'tarefa completed') {
    x.style.textDecoration = 'none';
    x.className = 'tarefa';
  } else {
    x.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    x.className = 'tarefa completed';
  }
}
listaTarefas.addEventListener('dblclick', riscaTarefaCompletada);

// A função abaixo foi baseado nessa referencia https://stackoverflow.com/questions/4777077/removing-elements-by-class-name

// Remove todos as tarefas da lista
function removeTudo() {
  const elementos = document.getElementsByClassName('tarefa');
  while (elementos.length > 0) {
    listaTarefas.removeChild(elementos[0]);
  }
}

document.getElementById('apaga-tudo').addEventListener('click', removeTudo);

// Remove as tarefas riscadas da lista
function removeFinalizados() {
  const elementos = document.getElementsByClassName('tarefa completed');
  while (elementos.length > 0) {
    listaTarefas.removeChild(elementos[0]);
  }
}

document.getElementById('remover-finalizados').addEventListener('click', removeFinalizados);

// Salva as tarefas da lista. Usei como referencia o codigo de uma colega: https://github.com/CarolSi-hub/Trybe-ToDoList/blob/master/script.js
function salvarTarefas() {
  localStorage.clear();
  const todasTarefas = listaTarefas.innerHTML;
  localStorage.setItem('listaSalva', todasTarefas);
}

document.getElementById('salvar-tarefas').addEventListener('click', salvarTarefas);

// Recupera a lista salva
function recuperarListaSalva() {
  listaTarefas.innerHTML = localStorage.getItem('listaSalva');
};

window.addEventListener('load', recuperarListaSalva);

function moverParaCima() {
  for (let i = 1; i < listaTarefas.childElementCount; i += 1) {
    if (listaTarefas.children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      listaTarefas.children[i].style.backgroundColor = 'white';
      listaTarefas.children[i-1].style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}

document.getElementById('mover-cima').addEventListener('click', moverParaCima);

function moverParaBaixo() {
  let marcador = null;
  for (let i = 0; i < listaTarefas.childElementCount - 1; i += 1) {
    if (listaTarefas.children[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      marcador = i;
    }
  }
  listaTarefas.children[marcador].style.backgroundColor = 'white';
  listaTarefas.children[marcador+1].style.backgroundColor = 'rgb(128, 128, 128)';
}

document.getElementById('mover-baixo').addEventListener('click', moverParaBaixo);