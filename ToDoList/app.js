'use strict';

let banco = [
   {'texto': 'Estudar JS', 'status': ''},
   {'texto': 'netflix', 'status': 'checked'},
   {'texto': 'teste', 'status': 'checked'}
];

const getBanco = () => localStorage.getItem('todoList') ?? [];

const criarItem = (texto, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = ` 
        <input type="checkbox" ${status} data-indice=${indice} >
        <div>${texto}</div>
        <input type="button" value="X" data-indice=${indice} > 
        `
        document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas();
    banco.forEach ( (item, indice) => criarItem (item.texto, item.status, indice));
}

const addItem = (evento) => {
    const tecla = evento.key;
    const text = evento.target.value
    if (tecla === 'Enter'){
        banco.push ({'texto': text, 'status': ''});
        atualizarTela();
        evento.target.value = '';
    }
}
const removerItem = (indice) => {
    banco.splice (indice, 1);
    atualizarTela();
}
const atualizarItem = (indice) => {
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    atualizarTela();
}
const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === 'button'){
        const indice = elemento.dataset.indice;
        removerItem (indice);
    }else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem (indice);
    }
}

document.getElementById('newItem').addEventListener('keypress', addItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();
