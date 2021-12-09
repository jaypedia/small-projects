// 시작 : 파란 화면을 띄우고 대기한다.
// 파란 화면 클릭 시, 빨간 화면으로 전환하고 타이머를 작동시킨다.
// 랜덤 타이머가 작동되고, 시간을 재기 시작한다.
// 빨간 화면 클릭 시, 파란 화면으로 전환하며 성급했다고 안내한다.
// 초록 화면 클릭 시, 클릭까지 얼마나 걸렸는지 측정하고 표시해주며, 파란 화면으로 전환한다.

// * 즉 이벤트는 클릭 이벤트 하나 달지만, 화면의 색깔이 무엇이냐에 따라 처리해주는 일이 달라지게 된다.

const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

// * 클래스를 waiting(파랑), ready(빨강), now(초록)로 바꾸는 식으로 진행
// * 색깔에 따른 메시지 변경
// 빨강 : 초록색이 되면 클릭하세요, 초록 : 클릭하세요

// Scope를 감안하여 변수를 함수 바깥에 선언한다.
let timer;
let startTime;
let clickTime;

function changeColor() {
  // 파란 화면을 클릭했을 경우
  if ($screen.className === 'waiting') {
    $screen.className = 'ready';
    $screen.textContent = 'READY! 초록색이 되면 클릭하세요';
    // 랜덤 초 후 초록 화면으로 변경
    timer = setTimeout(() => {
      $screen.className = 'now';
      $screen.textContent = '클릭하세요!';
      startTime = new Date(); // 첫 시간 재기
    }, Math.floor(Math.random() * 1000) + 2000); // 2초에서 3초 사이의 랜덤한 밀리초

    // 빨간 화면을 클릭했을 경우
  } else if ($screen.className === 'ready') {
    $screen.className = 'waiting';
    $screen.textContent = '성급한 클릭이었네요.';
    // setTimeout 없애주기
    clearTimeout(timer);
    $result.innerHTML = '';

    // 초록 화면을 클릭했을 경우
  } else if ($screen.className === 'now') {
    $screen.className = 'waiting';
    $screen.textContent = '클릭해서 시작하세요';
    clickTime = new Date(); // 끝 시간 재기
    // 시간 계산
    const reactionSpeed = clickTime - startTime;
    $result.innerHTML = `반응 시간은 :${reactionSpeed}ms `;
  }
}

$screen.addEventListener('click', () => {
  changeColor();
});

// className을 바꾸는 대신, classList의 add, replace, remove 메서드를 사용할 수도 있다.
