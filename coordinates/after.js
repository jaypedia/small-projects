const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

// load : after resource (css, images), window 생략 가능
addEventListener('load', () => {
  // 이 세가지는 load 안에 있어야 한다.
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.innerHTML = `${x}px, ${y}px`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
  });
});
