const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();

const playBtn = document.querySelector('.game__button');

playBtn.addEventListener('click', () => {
  field.innerHTML = '<img src="img/carrot.png" alt="carrot">';
  const carrot = document.querySelector('img');
  console.dir(carrot);
  carrot.x = 10;
});

function initGame() {
  console.log(fieldRect);
  addItem('carrot', 5, 'img/carrot.png');
  addItem('bug', 5, 'img/bug.png');
}

function addItem(className, count, imgPath) {}

initGame();
