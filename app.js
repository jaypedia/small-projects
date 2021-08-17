const form = document.querySelector('form');
const input = form.querySelector('input');
const addBtn = form.querySelector('button.add');
const listRow = document.querySelector('li.list__row');

function handleInput(e) {
  e.preventDefault();
  const userInput = input.value;
  if (userInput !== '') {
    createItem(userInput);
    input.value = '';
  } else {
    alert('What do you want to do before you die?😉');
  }
  input.focus();
}

function createItem(userInput) {
  const items = document.createElement('div');
  items.setAttribute('class', 'items');

  const span = document.createElement('span');
  span.setAttribute('class', 'list__name');
  span.textContent = userInput;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'list__delete');
  deleteBtn.innerHTML = '<img src="bucket-list.png" alt="bucket" />';
  deleteBtn.addEventListener('click', () => {
    listRow.removeChild(items);
  });

  items.appendChild(span);
  items.appendChild(deleteBtn);
  listRow.appendChild(items);

  items.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

form.addEventListener('submit', handleInput);
addBtn.addEventListener('click', handleInput);
