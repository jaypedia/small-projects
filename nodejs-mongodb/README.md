# Node.js & MongoDB

##### 2022.2.1

---

## Objectives

- [ ] Learn Node.js & MongoDB
  - Node.js 활용하여 JS 문법으로 서버 만들기
- [ ] DB에 데이터를 저장하고 출력하는 방법 배우기
- [ ] API와 서버를 만드는 방법 배우기
- [ ] REST API 학습하기
- [ ] 서버 배포하는 방법 알기
- [ ] Bootstrap 사용하는 법 익히기

---

## 웹 사이트 기능을 만드는 기본 단계

1. 서버로 데이터를 전송할 수 있는 UI를 만든다.
2. 서버는 정보를 처리해준다. 서버는 그 정보를 처리할 수 있는 API가 있다.

## What is server?

```js
// 누군가가 /list 라는 페이지를 GET 요청하면,
// list.html 파일을 보내 준다!
```

- 서버 : 요청을 받으면 요청받은 것을 가져다주는 프로그램
- 요청 방식 4가지
  - 읽기 (GET)
  - 쓰기 (POST)
  - 수정 (PUT, PATCH)
  - 삭제 (DELETE)

## What is Node.js?

- JavaScript 언어의 목적(탄생 이유)은 HTML을 동적으로 조작하는 것.
- JavaScript를 해석하는 주체는 브라우저의 엔진
- 크롬 브라우저 엔진인 V8을 가져다가 만든 것이 Node.js
- Node.js 탄생 후, 브라우저 말고도 다른 환경에서 JavaScript를 실행할 수 있게 됨(실행 환경)
- Node.js 덕분에 JS를 프로그래밍 언어처럼 사용할 수 있게 되고 서버 만들기도 쉬워짐
  - 코드가 짧고 쉬운 편이라서 빠른 개발이 가능하다.
  - _Pivoting이 잘 된다._
- Event driven, Non-blocking I/O
- 웹 서비스를 만드는 것이 아닐 경우에는 C, python 등 다른 언어를 쓰는 것이 나을 수 있다.

### Non-blocking

- 일반적인 서버일 경우, 요청이 많거나 오래 걸리는 요청을 받게 되면 대기 시간이 발생한다.
  - 개선을 위해서 서버를 scale up 하거나 multi threading을 할 수 있다.
- 그러나 Node.js로 만든 서버일 경우, 그런 상황에서도 멈추지 않는다.
- 이런 특성으로 인해 Node.js는 다음 서비스에 대해 강점을 가지게 된다.
  - SNS, 채팅 서비스같이 요청이 매우 많은 서비스 처리 시

## REST API

> Representational State Transfer - by Roy Fielding

- 서버를 만들 때 RESTful하게 API를 짜는 것이 좋다고 한다.

### REST 6가지 원칙

1. Uniform interface
2. Client-Server 역할 구분
3. Stateless
   - 요청끼리 서로 의존하지 않아야 한다.
4. Cacheable
   - 서버에서 보내주는 정보들은 캐싱이 가능해야 한다.
   - 캐싱을 위한 버전 등도 잘 관리해야 한다.(사실 브라우저가 잘 해 준다)
5. Layered System
6. Code on Demand

### URL 이름 짓는 원칙

- 동사가 아닌 명사로 작성해서 무엇을 요청하는지 확실히 알 수 있도록 한다.
- 하위 문서를 나타낼 때는 '/'을 이용한다.
- 파일 확장자(.html)를 쓰지 않는다.
- 띄어쓰기는 대시(-)를 이용한다.
- 자료 하나 당 하나의 URL을 쓴다.

### API (Application Programming Interface)

- 웹 개발 시의 API는, **웹 서버와 고객 간의 소통 방식**이라고 생각하면 된다.
  - 어떻게 해야 서버와 통신할 수 있을지 정의해 놓은 문서, 통신 규약

---

## 서버 만들기

### 📔 express

- 서버를 띄우기 위한 기본 셋팅
- `listen(서버를 띄울 포트 번호, 띄운 후 실행할 코드)`

```js
const express = require('express');

const app = express();

app.listen(8080, () => {
  console.log('listening on 8080');
});
```

## POST 요청해서 서버에 데이터 전송하기

### form

- action : 경로
- method : POST 등 명시

### 📔 body-parser

```js
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
```

- 유저가 form에 내용을 입력한 후, submit 버튼 눌렀을 때 유저가 입력한 내용을 DB에 저장하기 위해서.
- 요청한 데이터(body)를 해석할 때 쉽게 해 줄 수 있도록 도와주는 라이브러리다.

```html
<form action="/add" method="POST">
  <div class="form-group">
    <label>TODO</label>
    <input type="text" class="form-control" name="title" />
  </div>
  <div class="form-group">
    <label>DATE</label>
    <input type="text" class="form-control" name="date" />
  </div>
  <button type="submit" class="btn btn-outline-secondary">Submit</button>
</form>
```

- 위와 같은 식으로 input에 name을 써 줘야 한다.

```js
app.post('/add', (req, res) => {
  res.send('FINISH');
  console.log(req.body.title);
});
```

- `req.body` : 요청했던 form에 적힌 데이터를 수신할 수 있게 된다.

## NoSQL

- SQL이라는 언어를 사용하지 않아도 되고, Object 자료형으로 입력과 출력이 가능하다.
- MongoDB Atlas Database 사이트에서 무료 호스팅을 받아 이용이 가능하다.
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) 사이트에서 회원가입을 한다.
- 만든 데이터베이스를 접속(Connect) 해야 한다.

### 📔 mongodb

- `_id` : 자료들을 서로 구분하기 위해 필요하다. 지정하지 않으면 유니크한 아이디를 자동으로 부여해준다.

```js
// database 접속 완료 시 내부 코드를 실행한다.
MongoClient.connect(
  'mongodb+srv://admin:1234@cluster0.tqcrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  (err, client) => {
    if (err) return console.log(err);

    db = client.db('todoapp'); // todoapp이라는 database(folder) 에 연결

    db.collection('post').insertOne(
      // post라는 collection에 데이터를 insert한다.
      { name: 'MILLIE', age: 200 },
      (err, result) => {
        console.log('SAVED');
      }
    );

    app.listen(8080, () => {
      console.log('listening on 8080');
    });
  }
);
```

## HTML에 MongoDB에 저장된 데이터를 넣어주기

### 📔 ejs

- npm으로 ejs 라이브러리 설치

```js
app.set('view engine', ejs);
```

- 확장자 .ejs 사용 가능
- .ejs 파일은 views 폴더 안에 위치해야 함
- html 파일에 ejs 문법을 이용해서 서버의 데이터를 삽입할 수 있게 됨
- react, vue, angular 등으로도 데이터 바인딩이 가능하다.

```html
LIST <% for (let i = 0; i < posts.length; i++) { %>
<h4>Title : <%= posts[i].title %></h4>
<h4>Due Date : <%= posts[i].date %></h4>
<% } %>
```

- auto increment
  - DB에 항목을 추가할 때마다 자동으로 1을 증가시켜서 저장해 주는 기능
  - mongo db에는 없음.

## Ajax로 삭제 요청하기
