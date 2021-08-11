const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const save = document.getElementById('jsSave');

const INITIAL_COLOR = '#2c2c2c';

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 700, 700);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 5;

let painting = false;
let filling = false;

function startPainting(event) {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    // Making a path
    ctx.beginPath(); // begin a path
    ctx.moveTo(x, y); // Starting point
  } else {
    // Draw
    ctx.lineTo(x, y); // Ending point
    ctx.stroke(); // Drawing a line
  }
}

function stopPainting(event) {
  painting = false;
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeInput(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerHTML = 'Fill<i class="fas fa-fill-drip"></i>';
  } else {
    filling = true;
    mode.innerHTML = 'Paint<i class="fas fa-paint-brush"></i>';
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, 700, 700);
  }
}

function contextMenu(event) {
  event.preventDefault();
}

function handleSave() {
  const image = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = image;
  link.download = 'My painting🎨';
  const check = confirm('Do you want to download your image?');
  if (check === true) {
    link.click();
  }
}

if (canvas) {
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', handleCanvasClick);
  canvas.addEventListener('contextmenu', contextMenu);
}

colors.forEach((color) => color.addEventListener('click', handleColorClick));

if (range) {
  range.addEventListener('input', handleRangeInput);
}

if (mode) {
  mode.addEventListener('click', handleModeClick);
}

save.addEventListener('click', handleSave);
