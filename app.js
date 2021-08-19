const form = document.querySelector('form');
const input = form.querySelector('input');
const addBtn = form.querySelector('button.add');
const lists = document.querySelector('ul.lists');

function onAdd(e) {
  e.preventDefault();
  const userInput = input.value;
  if (userInput === '') {
    alert('What do you want to do before you die?😉');
    input.focus();
    return;
  }
  const item = createItem(userInput);
  lists.appendChild(item);
  item.scrollIntoView({ block: 'center', behavior: 'smooth' });
  input.value = '';
  input.focus();
}

let id = 0;

function createItem(userInput) {
  const listRow = document.createElement('li');
  listRow.setAttribute('class', 'list__row');
  listRow.setAttribute('data-id', id);
  listRow.innerHTML = `
  <div class="items">
    <span class="list__name">${userInput}</span>
    <button class="list__delete">
      <img src="bucket-list.png" alt="bucket" data-id="${id}"/>
    </button>
  </div>`;
  id++;
  return listRow;
}

function deleteItem(event) {
  const targetId = event.target.dataset.id;
  if (targetId) {
    const toBeDeleted = document.querySelector(`li[data-id='${targetId}']`);
    toBeDeleted.remove();
  }
}

form.addEventListener('submit', onAdd);
addBtn.addEventListener('click', onAdd);
lists.addEventListener('click', deleteItem);
