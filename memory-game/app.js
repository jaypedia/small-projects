document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
    { name: 'fries', img: 'images/fries.png' },
    { name: 'cheeseburger', img: 'images/cheeseburger.png' },
    { name: 'ice-cream', img: 'images/ice-cream.png' },
    { name: 'pizza', img: 'images/pizza.png' },
    { name: 'milkshake', img: 'images/milkshake.png' },
    { name: 'hotdog', img: 'images/hotdog.png' },
  ];

  cardArray.sort(() => 0.5 - Math.random());
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  const grid = document.querySelector('.grid');
  const popUp = document.querySelector('.pop-up');
  const playBtn = document.querySelector('button.game__play');
  const replayBtn = document.querySelector('.pop-up .pop-up__replay');
  const score = document.querySelector('#score');
  const message = document.querySelector('.pop-up .pop-up__message');

  function playGame() {
    popUp.classList.add('hidden');
    playBtn.innerHTML = '<i class="fas fa-stop"></i>';
    playBtn.removeEventListener('click', playGame);
    playBtn.addEventListener('click', replayGame);
    // Start stopwatch
  }

  function replayGame() {
    popUp.classList.remove('hidden');
    // Initialize stopwatch
    // Fix : playGame() function - don't make the board again
  }

  replayBtn.addEventListener('click', playGame);
  playBtn.addEventListener('click', playGame); // Need to Fix

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      grid.appendChild(card);
      card.addEventListener('click', flipCard);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId === optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
    }
    cardsChosen = [];
    cardsChosenId = [];
    score.textContent = cardsWon.length;

    if (cardsWon.length === cardArray.length / 2) {
      popUp.classList.remove('hidden');
      message.innerHTML = 'Congratulations🎉<br>You found them all!';
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
