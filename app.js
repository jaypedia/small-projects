const form = document.querySelector('form');
const input = form.querySelector('input');
const addBtn = form.querySelector('button.add');
const listRow = document.querySelector('li.list__row');
const deleteBtn = document.querySelector('button img');
const item = listRow.querySelector('div.item');

function handleInput(e) {
  e.preventDefault();
  const userInput = input.value;
  const item = document.createElement('div');
  item.setAttribute('class', 'item');
  item.innerHTML = `<span class="list__name">${userInput}</span><button class="list__delete"><img src="bucket-list.png" alt="bucket" /></button>`;
  listRow.appendChild(item);
  input.value = '';
}

function handleDelete() {
  listRow.removeChild(item);
}

form.addEventListener('submit', handleInput);
addBtn.addEventListener('click', handleInput);
deleteBtn.addEventListener('click', handleDelete);
