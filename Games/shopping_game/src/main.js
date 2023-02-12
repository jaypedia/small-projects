const flicker = document.querySelector('.flicker');
const body = document.querySelector('body');
const item = document.querySelector('li.item');
const cart = document.querySelectorAll('.fa-cart-plus');

flicker.addEventListener('click', () => {
  body.classList.toggle('dark');
});
