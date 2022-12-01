const express = require('express');
const app = express();
const port=8080;

app.set('view engine', 'ejs');
app.use('/satatic', express.static(__dirname+'/static'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//라우터를 불러오는 부분
const router = require('./routes');
app.use('/', router);

//내가 정의해준 라우터가 아닌 다른 라우터 접속시 cannot get /라우터명이 뜬다 =>클라이언트는 이것을 보면 당황한다.
//error를 랜더한다 '*'어떤 글자가 와도 상관없다.
app.get('*', (req,res)=>{
    res.send('주소가 존재하지 않습니다.'); // *모든 라우터를 정의한 후 제일 마지막에 써야함
})


app.listen(port, ()=>{
    console.log('open', port);
})