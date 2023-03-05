import { $ } from '../../utils/dom.js';

export const menuItemTemplate = (menuName, isSoldOut, id) => {
  return `
<li data-menu-id=${id} class="menu-list-item d-flex items-center py-2">
  <span class="w-100 pl-2 menu-name ${isSoldOut ? 'sold-out' : ''}">${menuName}</span>
  <button type="button" class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button">
    품절
  </button>
  <button type="button" class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button">
    수정
  </button>
  <button type="button" class="bg-gray-50 text-gray-500 text-sm menu-remove-button">
    삭제
  </button>
</li>
  `;
};

// TODO: Render에서 Count까지 책임지므로 count.js 는 삭제할 것.
export const renderMenu = (categoryItems) => {
  const $menuList = $('#espresso-menu-list');
  $menuList.innerHTML = categoryItems.reduce((acc, cur, idx) => {
    const item = menuItemTemplate(cur.name, cur.isSoldOut, idx);
    return acc + item;
  }, '');

  const $menuCount = $('.menu-count');
  $menuCount.textContent = `total ${categoryItems.length}`;
};
