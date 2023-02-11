const form = document.querySelector('form');
const input = form.querySelector('input');
const addBtn = form.querySelector('button.add');
const lists = document.querySelector('ul.lists');

function handleSubmit(e) {
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

function createItem() {
  const items = document.createElement('div');
  items.setAttribute('class', 'items');

  const span = document.createElement('span');
  span.setAttribute('class', 'list__name');
  span.textContent = userInput;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'list__delete');
  deleteBtn.innerHTML = '<img src="bucket-list.png" alt="bucket" />';

  //   deleteBtn.addEventListener('click', () => {
  //     listRow.removeChild(items);
  //   });

  items.appendChild(span);
  items.appendChild(deleteBtn);
  listRow.appendChild(items);

  items.scrollIntoView({ block: 'center', behavior: 'smooth' });

  //   ** Aug 19 : Try Event Delegation
  items.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      listRow.removeChild(items);
    }
  });
}

form.addEventListener('submit', handleSubmit);
addBtn.addEventListener('click', handleSubmit);
