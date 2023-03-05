import { $ } from '../utils/dom.js';
import { createMenuItem } from './components/menuItem.js';

export const App = () => {
  const $form = $('#espresso-menu-form');
  const $menuInput = $('#espresso-menu-name');
  const $menuSubmitBtn = $('#espresso-menu-submit-button');
  const $menuList = $('#espresso-menu-list');
  const $menuCount = $('.menu-count');

  const formHandler = (e) => {
    e.preventDefault();
    const menuInputValue = $menuInput.value;
    if (!menuInputValue) return;
    const menuItem = createMenuItem(menuInputValue);
    $menuList.appendChild(menuItem);
    const menuCount = Number($menuCount.textContent.split(' ')[1]) + 1;
    $menuCount.textContent = `total ${menuCount}`;
    $menuInput.value = '';
  };

  $form.addEventListener('submit', formHandler);
  $menuSubmitBtn.addEventListener('click', formHandler);
};
