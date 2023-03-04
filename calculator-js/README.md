# A Calculator with Vanilla JavaScript

라이브러리 없이 HTML, CSS, JavaScript로 만드는 간단한 계산기 프로젝트입니다. [Web dev simplified 채널의 영상](https://youtu.be/j59qQ7YWLxw)을 보고 만들어 보았습니다.

## Demo

## Code

### HTML

```html
<div class="calculator-grid">
  <div class="output">
    <div data-previous-operand class="previous-operand"></div>
    <div data-current-operand class="current-operand"></div>
  </div>
  <button data-all-clear class="span-two">AC</button>
  <button data-delete>DEL</button>
  <button data-operation>÷</button>
  <button data-number>1</button>
  <button data-number>2</button>
  <button data-number>3</button>
  <button data-operation>×</button>
  <button data-number>4</button>
  <button data-number>5</button>
  <button data-number>6</button>
  <button data-operation>+</button>
  <button data-number>7</button>
  <button data-number>8</button>
  <button data-number>9</button>
  <button data-operation>-</button>
  <button data-number>.</button>
  <button data-number>0</button>
  <button data-equals class="span-two">=</button>
</div>
```

1. CSS Grid를 적용하여 계산기의 모양을 만들 것이기 때문에 클래스 이름 `calculator-grid`를 부여하여 가장 상위에 위치시킵니다.
2. `output`에는 계산의 결과값이 표시되는 부분입니다. `previous-operand`에는 이전에 입력했던 연산들이 들어가고, `current-operand`에는 현재 입력한 연산들이 들어갑니다.
3. `<button>` 태그를 사용하여 숫자, All clear, delete, 4가지 연산자 및 = 버튼을 만들었습니다. 이때 클래스 대신 `data-attribute`를 부여했습니다.
4. Grid에서 두 칸을 차지해야 하는 요소에는 `span-two`라는 클래스를 추가로 부여했습니다.

### CSS

```css
.calculator-grid {
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 80vh;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(140px, auto) repeat(5, 100px);
}

.span-two {
  grid-column: span 2;
}

.output {
  grid-column: 1 / -1;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
}
```

1. 가장 상위 요소인 div 태그의 `.calculator-grid` 클래스에 `display: grid;`를 부여합니다. `grid-template-columns`로 4열을 만들고, `grid-template-rows`로 5행을 만듭니다.
2. 2칸을 차지해야 하는 `.span-two` 클래스에는 `grid-column: span 2;`를 부여하여 두 열을 차지할 수 있도록 합니다.
3. 결과값이 표시되는 부분인 `.output`에는 4개의 열을 모두 차지할 수 있도록 `grid-column: 1 / -1;`을 부여합니다.
4. `word-wrap: break-word;`, `word-break: break-all;` 속성을 부여해 숫자들이 범위를 넘어갈 정도로 많아지면 overflow를 방지하고, 한 숫자씩 끊어질 수 있도록 합니다.

### JavaScript
