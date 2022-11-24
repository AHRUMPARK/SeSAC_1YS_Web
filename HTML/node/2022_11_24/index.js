//웹서버 여는 코드
const express = require('express');
const app = express(); 

const port = 8080;
app.set('view engine', 'ejs');
//ejs템플릿을 뷰엔진으로 쓰겟다.

//form 전송 > 기본적으로 2줄을 body-parser쓰기위해 복붙이나 외우기
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/static', express.static('static'));

app.get("/", function(req,res){
    res.render('index');
})

app.get("/form", function(req,res){
    console.log(req.query); //뭐가 올지 몰라도 쿼리로 오겟지 콘솔 찍자!
    res.send({ msg: 'get - 이름은 : '+ req.query.name});
})
app.post('/form', function(req,res){
    console.log(req.body);
    res.send({ ID : 'post - 이름은 : ' + req.body});
})

app.get("/test_1", function(req,res){
    res.render('test_1');
})
app.get("/test_2", function(req,res){
    res.render('test_2');
})

app.get('/test_form', function(req,res){
    console.log(req.query);
    res.send({  name_ : '이름은 : ' + req.query.name1 + '입니다.',
                gender_ :'성별은 : ' + req.query.gender1 + '입니다.',
                birth_ : '생일은 : ' + req.query.birth + '일 입니다.'
    });
})

app.post('/test_form2', function(req,res){
    console.log(req.body);
    // 힌트 1. 서버 코드
    // if(req.)if (req.body.id_ == "ar" && req.body.ps_ == '0302'){
    //     res.send('<p style="color: blue;">로그인 성공</p>');
    // } else {
    // 힌트 2. ejs 코드
    //document.querySelector('#result').innerHTML = res.data ;
    //     res.send('<p style="color: red;">로그인 실패</p>');
    // }
    console.log(req.body.id_);
    if (req.body.id_ == "ar" && req.body.ps_ == '0302'){
        res.send('<p style="color: blue;">로그인 성공</p>');
    } else {
        res.send('<p style="color: red;">로그인 실패( 아이디 또는 비밀번호가 틀렸습니다.)</p>');
    }
})

app.get('/fetch', function(req,res){
    res.render('test_3');
})

app.post('/fetch', function(req,res){
    res.send(data);
    
})
 // 웹서버 여는법 listen(포트번호,함수)
app.listen(port,()=>{
    console.log('서버 open : ', port);
})
