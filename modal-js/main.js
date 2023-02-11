const openButton = document.getElementById('open');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.modal__overlay');
const closeBtn = modal.querySelector('button');
const openModal = () => {
  modal.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
};
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
openButton.addEventListener('click', openModal);
