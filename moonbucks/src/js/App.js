import { $ } from '../utils/dom.js';
import { updateMenuCount } from '../utils/count.js';
import { createMenuItem } from './components/menuItem.js';

const $form = $('#espresso-menu-form');
const $menuInput = $('#espresso-menu-name');
const $menuSubmitBtn = $('#espresso-menu-submit-button');
const $menuList = $('#espresso-menu-list');

const createMenu = () => {
  const menuInputValue = $menuInput.value;
  if (!menuInputValue) return;
  const menuItem = createMenuItem(menuInputValue);
  $menuList.appendChild(menuItem);
  updateMenuCount('create');
  $menuInput.value = '';
};

const updateMenu = (target) => {
  const $menuName = target.closest('li').querySelector('.menu-name');
  const menuNameText = $menuName.textContent;
  const updatedMenuText = prompt('Enter the new menu name', menuNameText);
  $menuName.textContent = updatedMenuText;
};

const deleteMenu = (target) => {
  const isConfirmed = confirm('Are you sure you want to remove the item?');
  if (isConfirmed) {
    target.closest('li').remove();
    updateMenuCount('delete');
  }
};

export const App = () => {
  const formHandler = (e) => {
    e.preventDefault();
    createMenu();
  };

  const menuItemHandler = ({ target }) => {
    if (target.classList.contains('menu-edit-button')) {
      updateMenu(target);
      return;
    }
    if (target.classList.contains('menu-remove-button')) {
      deleteMenu(target);
      return;
    }
  };

  $form.addEventListener('submit', formHandler);
  $menuSubmitBtn.addEventListener('click', createMenu);
  $menuList.addEventListener('click', menuItemHandler);
};
