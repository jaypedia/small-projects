<h1><p align="center">Coodinates</p>

### Tech stacks that I used for this project

<p align="left"> 
<a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://icongr.am/devicon/css3-original-wordmark.svg?size=128&color=currentColor" alt="css3" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor" alt="javascript" width="40" height="40"/> </a>
</p>

- 참고 사이트 : csstriggers.com

## Before

- mousemove event가 발생할 때마다 top, left를 바꿔주는 것은 브라우저 성능에 좋지 않다.
- layout, paint, composite이 모두 발생해야 하기 때문

## After

- top, left 대신 transform 사용하기 : 이것은 composite만 발생하므로 더 나은 성능을 기대할 수 있다.
