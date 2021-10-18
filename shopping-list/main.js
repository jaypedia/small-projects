'use strict';

const infoDate = document.querySelector('.info_date');
const createListBtn = document.querySelector('.create-list-btn');
const clearListBtn = document.querySelector('.clear-list-btn');
const input = document.querySelector('input');
const addBtn = document.querySelector('.add-btn');
const items = document.querySelector('.items');
const allClearBtn = document.querySelector('.all-clear-btn');

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아 온다.
  const text = input.value;
  // input에 focus가 있다가 버튼을 클릭하는 순간 focus가 버튼으로 옮겨 온다
  // focus가 input에 남아있도록 하기 위해서 추가해 줌
  if (text === '') {
    input.focus();
    return;
  }
  // 2. 새로운 아이템을 만든다. (text + delete Button)
  const item = createItem(text);
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);
  // 새로 추가된 "아이템"으로 스크롤링
  item.scrollIntoView({ behavior: 'smooth' });
  // 4. input을 초기화한다. + Focusing
  input.value = '';
  input.focus();
}

// text를 전달받고, 그것으로 새로운 DOM 요소를 만든다.
// li > div > span > button 만들기
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const itemName = document.createElement('span');
  itemName.setAttribute('class', 'item__name');
  itemName.innerHTML = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fas fa-minus"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  item.appendChild(itemName);
  item.appendChild(deleteBtn);
  itemRow.appendChild(item);

  return itemRow;
}

function allClear() {
  // const itemRow = document.querySelectorAll('li'); (X)
  if (!confirm('All Clear?')) return;
  items.innerHTML = '';
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

allClearBtn.addEventListener('click', () => {
  allClear();
});
