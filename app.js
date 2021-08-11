const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.jsColor');

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

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
}

if (canvas) {
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mouseleave', stopPainting);
}

colors.forEach((color) => color.addEventListener('click', handleColorClick));
