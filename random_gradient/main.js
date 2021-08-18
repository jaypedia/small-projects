const btn = document.querySelector('button');
const diceColor = document.querySelector('#color');

function random(number) {
  return Math.round(Math.random() * number);
}

function onClick() {
  const rndGradient = `linear-gradient(rgb(${random(255)},${random(
    255
  )},${random(255)}), rgb(${random(255)},${random(255)},${random(255)}))`;
  const rndColor = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.background = rndGradient;
  btn.style.color = rndColor;
  diceColor.style.color = rndColor;
  diceColor.innerHTML = rndColor;
}

btn.addEventListener('click', onClick);
