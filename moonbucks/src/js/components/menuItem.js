import { $ } from '../../utils/dom.js';

export const menuItemTemplate = (menuName, id) => {
  return `
    <li data-menu-id=${id} class="menu-list-item d-flex items-center py-2">
  <span class="w-100 pl-2 menu-name">${menuName}</span>
  <button type="button" class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button">
    수정
  </button>
  <button type="button" class="bg-gray-50 text-gray-500 text-sm menu-remove-button">
    삭제
  </button>
</li>
  `;
};

export const renderMenu = (categoryItems) => {
  const $menuList = $('#espresso-menu-list');
  $menuList.innerHTML = categoryItems.reduce((acc, cur, idx) => {
    const item = menuItemTemplate(cur.name, idx);
    return acc + item;
  }, '');
};
