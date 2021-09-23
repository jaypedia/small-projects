const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

window.addEventListener('mousemove', event => {
  let clientX = event.clientX;
  let clientY = event.clientY;
  tag.innerHTML = `${clientX}px, ${clientY}px`;

  vertical.style.left = `${clientX}px`;
  horizontal.style.top = `${clientY}px`;

  target.style.left = `${clientX}px`;
  target.style.top = `${clientY}px`;

  tag.style.left = `${clientX}px`;
  tag.style.top = `${clientY}px`;
});
