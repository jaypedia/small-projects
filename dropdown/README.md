# Dropdown

##### Feb 19, 2022

---

## Story

- DOM을 공부하려고 유튜브에서 영상을 검색했는데, Kimbug님의 영상이 눈에 띄었다.
- Dropdown을 직접 만들어보며 DOM을 조작하는 방법을 익힐 수 있었다.
- CSS에서도 내가 써보지 않았던 속성들이 있어서, 이런 경우에 쓴다는 것을 알 수 있게 되었다.
- html과 css는 이미 김버그님이 완성을 해놨고 나는 JS만 작성하면 되었다. 약 20분 정도 소요되었다.
- dropdown 같은 것을 만들 때, HTML 기본 태그의 select 같은 것을 이용할 수도 있지만 background-color가 적용되지 않는 등 커스터마이징이 어려울 수 있다. 따라서 그냥 직접 만드는 것이 좋다.

## JavaScript

- [x] 클릭 시 `show` 클래스를 토글링한다.
- [x] 메뉴를 선택했을 때 text는 해당 메뉴로 바뀌어야 한다.
- [x] 메뉴를 선택했을 때 '다음' 버튼이 활성화되어야 한다. 즉 disabled를 없애 준다.

## My solution

```js
const toggle = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const next = document.querySelector('.next-button');

toggle.addEventListener('click', e => {
  menu.classList.toggle('show'); // 1
});

menu.addEventListener('click', e => {
  if (!e.target.matches('.dropdown-option')) return; // 2
  toggle.textContent = e.target.textContent; // 3
  toggle.classList.add('selected');
  menu.classList.remove('show'); // 4
  next.removeAttribute('disabled');
});
```

1. css에 메뉴가 max-height: 0으로 되어 있다. show라는 클래스를 부여하면 이것을 해지할 수 있다.
2. Event Delegation을 활용해 e.target이 dropdown option일 때만 아래 로직이 실행될 수 있게 했다.
   - 여러 가지 option들에 각각 forEach로 이벤트를 반복해서 주지 않아도 된다.
   - option의 parent인 menu에만 이벤트를 준다.
3. 토글의 텍스트를 현재 선택된 것의 텍스트로 바꿔주도록 했다.
4. 나는 menu를 선택했을 때 show 클래스를 없애주는 방식으로 했다.

   - 김버그님은 focus가 사라졌을 때, 즉 blur일 때 show 클래스를 없애주는 방식으로 했다.
   - 그런데 이렇게 했을 시 메뉴를 선택할 때, 그것을 toggleButton에서 focus가 사라진다고 인식해서 메뉴가 미처 선택되기도 전에 창이 닫혀 버리는 일이 발생하게 된다.
   - 이 문제를 어떻게 해결할 수 있을까?

## Kimbug's solution

```js
const dropdown = document.querySelector('.dropdown');
const toggleButton = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const nextButton = document.querySelector('.next-button');

toggleButton.addEventListener('click', function () {
  menu.classList.toggle('show');
});

toggleButton.addEventListener('blur', function () {
  // 1
  menu.classList.remove('show');
});

options.forEach(function (item) {
  item.addEventListener('click', selectOption);
});

function selectOption() {
  const value = this.textContent.trim(); // 2, 3
  toggleButton.textContent = value;
  toggleButton.classList.add('selected');
  nextButton.removeAttribute('disabled');
}
```

1.  `blur` 이벤트
    - focus가 해제되는 그 찰나의 순간을 blur 라고 한다.
2.  `trim()` 함수를 이런 경우 사용할 수 있다는 것을 알았다. 공백을 없애 준다.
3.  `this`를 이런 식으로 활용할 수 있다는 것을 알게 되었다.

## CSS

```css
.dropdown {
  position: relative;
  z-index: 1;
  width: 300px;
  margin-bottom: 8px;
}

.dropdown-menu {
  position: absolute;
  z-index: 2;
  top: calc(100% + 4px); /* 1 */
  left: 0;
  width: 100%;
  max-height: 0; /* 2 */
  overflow: hidden; /* 3 */
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: border-color 200ms ease-in, padding 200ms ease-in,
    max-height 200ms ease-in, box-shadow 200ms ease-in; /* 4 */
}

/* 5 */
.dropdown-toggle:active {
  border-color: rgba(224, 226, 231, 1);
}
```

### 1. `calc()`

<p align="center">
<img src="https://user-images.githubusercontent.com/85419343/154792394-fb9619f6-1317-4c03-9202-3cf53bf87bfd.png" width="500px">
</p>

- dropdown-menu의 parent 요소인 dropdown의 top으로부터 100% + 5px 떨어뜨려서 위치하도록 하기 위해 calc 함수를 사용.

### 2. `max-height`

- 클릭하기 전에는 max-height를 0으로 설정하고, 클릭하고 나서는 max-height에 px을 부여

### 3. `overflow`

- `max-height: 0;`과 함께 쓰여서 dropdown 클릭 전에는 보이지 않도록 함

### 4. `transition`

- 자연스럽게 내려오는 dropdown을 구현하기 위함

### 5. `:active`

- CSS pseudo-class
- represents an element that is being activated by the user
- When using a mouse, "activation" typically starts when the user presses down the primary mouse button.
- 즉 마우스를 누르고 있는 동안 활성화가 된다.

---

### Reference

[Kimbug | Dropdown](https://youtu.be/X0bf0hfE3qA)
[MDN | calc()](<https://developer.mozilla.org/en-US/docs/Web/CSS/calc()>)
[MDN | :active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
