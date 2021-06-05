// Usei o exercicio da piramide do bloco 5 como referencia para o window.onload
const botao = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function criaTarefa() {
  const tarefa = document.createElement('li');
  // Referencia da propriedade value https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup_addeventlistener
  tarefa.innerText = input.value;
  tarefa.className = 'tarefa';
  listaTarefas.appendChild(tarefa);
  input.value = '';
}
botao.addEventListener('click', criaTarefa);

function pintaSoUm(event) {
  const x = event.target;
  for (let i = 0; i < listaTarefas.childElementCount; i += 1) {
    listaTarefas.children[i].style.backgroundColor = 'white';
  }
  x.style.backgroundColor = 'rgb(128, 128, 128)';
}
listaTarefas.addEventListener('click', pintaSoUm);

function riscaTarefaCompletada(event) {
  const x = event.target;
  const nomeDaClasse = x.className;
  if (nomeDaClasse === 'tarefa completed') {
    x.style.textDecoration = 'none';
    nomeDaClasse = 'tarefa';
  } else {
    x.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    nomeDaClasse = 'tarefa completed';
  }
}
listaTarefas.addEventListener('dblclick', riscaTarefaCompletada);
// A função abaixo foi baseado nessa referencia https://stackoverflow.com/questions/4777077/removing-elements-by-class-name

function removeTudo() {
  const elementos = document.getElementsByClassName('tarefa');
  while (elementos.length > 0) {
    listaTarefas.removeChild(elementos[0]);
  }
}

document.getElementById('apaga-tudo').addEventListener('click', removeTudo);

function removeFinalizados() {
  const elementos = document.getElementsByClassName('tarefa completed');
  while (elementos.length > 0) {
    listaTarefas.removeChild(elementos[0]);
  }
}

document.getElementById('remover-finalizados').addEventListener('click', removeFinalizados);
