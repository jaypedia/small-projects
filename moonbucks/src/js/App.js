// @ts-check

import { $ } from '../utils/dom.js';
import { updateMenuCount } from '../utils/count.js';
import { renderMenu } from './components/menuItem.js';
import {
  getLocalStorageItem,
  setLocalStorageItem,
  getMenuFromStorage,
  getSelectedMenuFromStorage,
  setSelectedMenuToStorage,
  getMenuByCategory,
} from '../utils/localStorage.js';

export function App() {
  this.init = () => {
    const menu = getMenuFromStorage();
    const INITIAL_MENU = 'espresso';
    setLocalStorageItem('menu', menu);
    setLocalStorageItem('selectedMenu', INITIAL_MENU);
    const categoryItems = menu[INITIAL_MENU];
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
    // updateMenuCount('create');
    $menuInput.value = '';

    // this.menu[this.selectedMenu]
    const menu = getMenuFromStorage();
    const selectedMenu = getSelectedMenuFromStorage();
    // console.log(selectedMenu);
    menu[selectedMenu].push({ name: menuInputValue, isSoldOut: false });

    setLocalStorageItem('menu', menu);

    const categoryItems = menu[selectedMenu];

    renderMenu(categoryItems);
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

  const changeMenuToSoldOut = (target) => {
    // TODO: LocalStorage 상태 변경
    // 바뀐 상태로 재렌더링
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
    if (target.classList.contains('menu-sold-out-button')) {
      changeMenuToSoldOut(target);
      return;
    }
  };

  const navBarHandler = ({ target }) => {
    const changeTitle = () => {
      const categoryName = target.textContent;
      $title.textContent = `${categoryName} menu management`;
    };

    const selectedMenu = target.dataset.categoryName;
    if (!selectedMenu) return;
    changeTitle();
    setSelectedMenuToStorage(selectedMenu); // 1. localstorage에 선택된 메뉴 저장
    const categoryItems = getMenuByCategory(selectedMenu); // 2. localStorage에서 데이터 찾기
    renderMenu(categoryItems); // 3. render
  };

  $form.addEventListener('submit', formHandler);
  $menuSubmitBtn.addEventListener('click', addNewMenu);
  $menuList.addEventListener('click', menuItemHandler);
  $navBar.addEventListener('click', navBarHandler);
}
