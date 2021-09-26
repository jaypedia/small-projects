'use strict';

const infoDate = document.querySelector('.info_date');
const createListBtn = document.querySelector('.create-list-btn');
const clearListBtn = document.querySelector('.clear-list-btn');
const form = document.querySelector('form');
const input = document.querySelector('input');
const addBtn = document.querySelector('.add-btn');
const lists = document.querySelector('ul.lists');
const deleteBtn = document.querySelectorAll('.list__delete');

function handleAddList(e) {
  e.preventDefault();
  const userInput = input.value;
  if (userInput.length > 20) {
    alert('Too long!');
  } else {
    lists.innerHTML += `<li class="list__row">
      <div class="items">
        <span class="list__name">${userInput}</span>
        <button class="list__delete"><i class="fas fa-minus"></i></button>
      </div>
    </li>`;
    input.value = '';
  }
}

function handleDeleteList(e) {
  console.log(e.path);
  const path = e.path[3];
  path.remove();
}

form.addEventListener('submit', handleAddList);
// 새로 추가한 list에는 적용되지 않는 문제
deleteBtn.forEach(item => {
  item.addEventListener('click', handleDeleteList);
});
