const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use('/satatic', express.static(__dirname+'/static'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//라우터를 불러오는 부분
const router = require('./routes/app');
app.use('/', router);


app.get('*', (req,res)=>{
    res.send('주소가 존재하지 않습니다.'); // *모든 라우터를 정의한 후 제일 마지막에 써야함
})

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});