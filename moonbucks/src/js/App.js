import { $ } from '../utils/dom.js';
import { updateMenuCount } from '../utils/count.js';
import { renderMenu } from './components/menuItem.js';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage.js';

export function App() {
  const initialMenuState = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: [],
  };

  this.menu = getLocalStorageItem('menu') || initialMenuState;
  this.selectedMenu = 'espresso';
  this.init = () => {
    setLocalStorageItem('menu', this.menu);
    const categoryItems = this.menu.espresso;
    renderMenu(categoryItems);
  };

  const $form = $('#espresso-menu-form');
  const $menuInput = $('#espresso-menu-name');
  const $menuSubmitBtn = $('#espresso-menu-submit-button');
  const $menuList = $('#espresso-menu-list');
  const $navBar = $('nav');
  const $title = $('.heading > h2');

  const addNewMenu = () => {
    const menuInputValue = $menuInput.value;
    if (!menuInputValue) return;
    updateMenuCount('create');
    $menuInput.value = '';
    this.menu[this.selectedMenu].push({ name: menuInputValue, isSoldOut: false });
    setLocalStorageItem('menu', this.menu);
    const categoryItem = this.menu[this.selectedMenu];
    renderMenu(categoryItem);
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

  const formHandler = (e) => {
    e.preventDefault();
    addNewMenu();
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

  const navBarHandler = ({ target }) => {
    const categoryKey = target.dataset.categoryName;
    if (!categoryKey) return;
    const categoryName = target.textContent;
    $title.textContent = `${categoryName} menu management`;
    this.selectedMenu = categoryKey;
    const categoryItems = getLocalStorageItem('menu')[categoryKey];
    renderMenu(categoryItems);
  };

  $form.addEventListener('submit', formHandler);
  $menuSubmitBtn.addEventListener('click', addNewMenu);
  $menuList.addEventListener('click', menuItemHandler);
  $navBar.addEventListener('click', navBarHandler);
}
