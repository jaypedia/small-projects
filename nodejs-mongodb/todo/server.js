const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

let db;

MongoClient.connect(
  'mongodb+srv://admin:1234@cluster0.tqcrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  (err, client) => {
    if (err) return console.log(err);

    db = client.db('todoapp');

    app.listen(8080, () => {
      console.log('listening on 8080');
    });
  }
);

app.get('/pet', (req, res) => {
  res.send('PET SHOPPING SITE');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/write', (req, res) => {
  res.sendFile(__dirname + '/write.html');
});

app.post('/add', (req, res) => {
  res.send('FINISH');
  // counter 라는 collection에서 postCount라는 이름인 데이터를 찾기
  db.collection('counter').findOne({ name: 'postCount' }, (err, result) => {
    const totalPost = result.totalPost;

    db.collection('post').insertOne(
      { _id: totalPost + 1, title: req.body.title, date: req.body.date },
      (err, result) => {
        console.log('SAVED YOUR TODO');
        // couter라는 collection에 있는 postCount 항목도 1 증가시키기
        db.collection('counter').updateOne(
          { name: 'postCount' },
          { $inc: { totalPost: 1 } },
          (err, result) => {
            if (err) return console.log(err);
          } // $set : operator (값을 바꿀 때 활용)
        );
      }
    );
  });
});

app.get('/list', (req, res) => {
  // DB에 저장된 post라는 collection 안의 모든 데이터 가져오기
  db.collection('post')
    .find()
    .toArray((err, result) => {
      console.log(result);
      res.render('list.ejs', { posts: result });
    });
});
