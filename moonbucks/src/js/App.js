import { $ } from '../utils/dom.js';
import { updateMenuCount } from '../utils/count.js';
import { createMenuItem } from './components/menuItem.js';

export const App = () => {
  const $form = $('#espresso-menu-form');
  const $menuInput = $('#espresso-menu-name');
  const $menuSubmitBtn = $('#espresso-menu-submit-button');
  const $menuList = $('#espresso-menu-list');

  const formHandler = (e) => {
    e.preventDefault();
    const menuInputValue = $menuInput.value;
    if (!menuInputValue) return;
    const menuItem = createMenuItem(menuInputValue);
    $menuList.appendChild(menuItem);
    updateMenuCount('create');
    $menuInput.value = '';
  };

  const menuItemHandler = ({ target }) => {
    if (target.classList.contains('menu-edit-button')) {
      const $menuName = target.closest('li').querySelector('.menu-name');
      const menuNameText = $menuName.textContent;
      const updatedMenuText = prompt('Enter the new menu name', menuNameText);
      $menuName.textContent = updatedMenuText;
      return;
    }
    if (target.classList.contains('menu-remove-button')) {
      const isConfirmed = confirm('Are you sure you want to remove the item?');
      if (isConfirmed) {
        target.closest('li').remove();
        updateMenuCount('delete');
      }
      return;
    }
  };

  $form.addEventListener('submit', formHandler);
  $menuSubmitBtn.addEventListener('click', formHandler);
  $menuList.addEventListener('click', menuItemHandler);
};
