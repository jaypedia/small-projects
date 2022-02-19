const toggle = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const next = document.querySelector('.next-button');

toggle.addEventListener('click', e => {
  menu.classList.toggle('show');
});

menu.addEventListener('click', e => {
  if (!e.target.matches('.dropdown-option')) return;
  toggle.textContent = e.target.textContent;
  toggle.classList.add('selected');
  next.removeAttribute('disabled');
  menu.classList.remove('show');
});
