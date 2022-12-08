const express = require('express');
// 쿠키 모듈 불러오기
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
// 쿠키 미들웨어 사용
app.use(cookieParser());
app.use('/satatic', express.static(__dirname+'/static'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// 변수로 만든다 (옵션객체)
const option = {
    httpOnly : true , // 클라이언트가 document.cookies(js) 접근할 수 없게 한다.
    maxAge : 60*60*24*1000, //24시간 //만들어진 순간부터 초만큼 뒤에 만료(ms단위) ex) 30000 -> 30초 뒤 만료
    // expires : "2022-12-08T09:00:00", //GMT 시간 2022-12-08T09:00:00 2022-12-08 아침 9시 만료 / 만료일 
    // path : "/visitor", // //localhost:8000 쿠키가 없음. localhost:8000/visitor/~~~ visitor뒤의 모든경로에만 쿠키가 있음/ 기본값 "/"
    // secure : false, //http -> true라고 할 경우 보안서버에만 적용됨(false가 기본값) /http, https(secure=보안서버)
    // signed : true // 쿠키의 암호화(true), 기본값 false
}

//기본 라우터
//실습 모달 쿠키
app.get('/', (req, res)=>{
    // req.cookies.popup 값을 비교해서  "none"
    // 쿠키 팝업이 1이면, none처리 하겠다. 그렇지 않으면 block 처리를 하겠다.
    //팝업이란 쿠키는 안보여줄경우에만 생성한다!!!
    if(req.cookies.popup == "1"){
    res.render('popup', { popup : "none"});}
    else
    {res.render('popup', { popup : "block"});}
});


app.post('/set_popup', (req,res)=>{
    //1. 쿠키를 만든다. 오늘 하루 열지 않음을 클릭했음을 구분하는 쿠키 생성 > 서버의 응답이 X 서버의 응답에 가져갈 객체를 설정하는 것
    res.cookie('popup', '1', option);
    // => { popup : 1 } 즉, 체크를 안하면 ~ > 1이 아니면, 팝업을 보여줘야 함
    //2. 서버 응답 (res.cookies 서버안의 헤더를 변경 시키는 것)
    res.send("true");
})


// 쿠키를 만들어 응답 보내기 
app.get('/set',(req, res)=>{
    //res.send("key", "value", 옵션객체);
    //res 서버가 클라이언트한테 보내는 응답. req가 서버에게 보내는 요청
    //res.cookie 서버에서 쿠키를 만들어서 보내준다 => 서버의 응답
    res.cookie('test', '1', option );
    res.send("쿠키 생성 성공!!");
});

//서버에서 쿠키를 가져오려면?
app.get('/get', (req,res)=>{
    console.log(req.cookies); //클라이언트에게 저장되어있다. 즉 req 객체로 쿠키에게 접근 가능
    console.log(req.cookies.test); //콘솔에 {test:'1'}로 찍히니까 test를 이런식으로 가져올 수 있다.
    res.send(req.cookies); //req객체에 쿠키 저장공간이 있다
})

app.get('*', (req,res)=>{
    res.send('주소가 존재하지 않습니다.'); // *모든 라우터를 정의한 후 제일 마지막에 써야함
})

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});