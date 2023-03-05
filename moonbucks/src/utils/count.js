import { $ } from './dom.js';

const getMenuCount = ($menuCount) => {
  return Number($menuCount.textContent.split(' ')[1]);
};

export const updateMenuCount = (command) => {
  const $menuCount = $('.menu-count');
  const menuCount = getMenuCount($menuCount);
  if (command === 'create') {
    $menuCount.textContent = `total ${menuCount + 1}`;
  } else if (command === 'delete') {
    $menuCount.textContent = `total ${menuCount - 1}`;
  }
};
