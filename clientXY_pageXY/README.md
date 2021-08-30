# ClientXY, PageXY

- 브라우저에서 좌표(Coordinates)는 매우 중요하고 자주 쓰이므로 정확하게 알아둬야 한다.
- 좌표의 위치를 알려 주는 ClientXY와 PageXY의 차이점을 명확하게 알기 위한 작은 실습
- ClientXY : 브라우저의 (0,0) 좌표를 기준으로 함
- PageXY : 페이지의 시작점을 기준으로 함
- 이 둘의 차이는 스크롤이 되는 document일 경우 체감할 수 있다.
- 함수에 event 객체 전달하기 : 어떤 event가 발생했을 때 다양한 정보를 담은 객체를 인자로 전달하여 활용한다.
- 추가적으로 클릭할 때마다 special한 상자의 left, top, right, botton을 받아올 수 있도록 함수를 작성하였다.

# Scroll

- 브라우저에서 아주 중요한 scroll과 관련된 API들을 알아보았다.

### Window.scrollTo() & Window.scroll()

- 문서의 특정 좌표 집합으로 스크롤링한다.(Window.scrollTo() scrolls to a particular set of coordinates in the document.)

```
window.scrollTo(x-coord, y-coord)
window.scrollTo(options)
```

- x-coord와 y-coord에는 pixel 값을 전달해줘야 한다. 각각 문서의 가로축, 세로축을 따른 픽셀 값이다.

- Window.scroll()과 Window.scrollTo()는 동일한 기능을 한다.

### Window.scrollBy()

- 문서를 지정된 양(pixel 값) 만큼 스크롤링한다.

### Element.scrollIntoView()

- Element.scrollIntoView()는 element의 parent 컨테이너를 스크롤링한다.
- 추가 옵션으로 behavior(auto or smooth), block(start, center, end, nearest), inline 등을 줄 수 있다.

### Reference

https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
