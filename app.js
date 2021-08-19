const field = document.querySelector('.game__field');

const ITEM_SIZE = 100;

const fieldRect = field.getBoundingClientRect();

function initGame() {
  console.log(fieldRect);
  addItem('carrot', 20, 'img/carrot.png');
  addItem('bug', 20, 'img/bug.png');
}

function addItem(className, count, imgPath) {
  const x2 = fieldRect.width - ITEM_SIZE;
  const y2 = fieldRect.height - ITEM_SIZE;
  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    console.dir(item);
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    const x = randomNumber(x2);
    const y = randomNumber(y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(num) {
  return Math.random() * num;
}

initGame();
