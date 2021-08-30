# ClientXY, PageXY

- 브라우저에서 좌표(Coordinates)는 매우 중요하고 자주 쓰이므로 정확하게 알아둬야 한다.
- 좌표의 위치를 알려 주는 ClientXY와 PageXY의 차이점을 명확하게 알기 위한 작은 실습
- ClientXY : 브라우저의 (0,0) 좌표를 기준으로 함
- PageXY : 페이지의 시작점을 기준으로 함
- 이 둘의 차이는 스크롤이 되는 document일 경우 체감할 수 있다.
- 함수에 event 객체 전달하기 : 어떤 event가 발생했을 때 다양한 정보를 담은 객체를 인자로 전달하여 활용한다.
- 추가적으로 클릭할 때마다 special한 상자의 left, top, right, botton을 받아올 수 있도록 함수를 작성하였다.
