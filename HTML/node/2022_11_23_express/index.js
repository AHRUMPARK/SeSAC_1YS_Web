//1.웹서버 여는 코드
const express = require('express');
const app = express(); //필요한 메소드를 app객체 속에 넣음

//2.포트 정의 (1023이하 숫자 안됨!)
const port = 8080;

//3.브라우저에 들어가서 할 행동
//'/'은 일반 접속이며, localhost:8080
//.get( 도메인 제외 주소, (req,res)) 
//res 서버 to 클라이언트 (서버의 응답), req 클라이언트 to 서버(클라이언트의 요청)
//파일 수정시 파일을 꺼야 한다 (컨트롤 + c )
app.get('/',(req,res)=>{
    res.send( ' hello Express !');
})

//4.localhost:8080/test > /test로 접속할 수 있는 라우터 만듦
//.sendFile()에 들어올 경로는 무조건 절대경로, __dirname은 현재 실행중인 폴더경로가 담긴 내장 변수 + '/views/index.html'이런식으로 사용 가능
//get 메소드로 test 라우터를 만들고 > sendFile로 파일경로 가져오는 것
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + 'views/index.html');
})

//5. 미들웨어 등록 > 클라이언트가 어떠한 경로를 접속햇을때 먼저 미들웨어부터 들어가게 됨
// app.use 미들웨어 등록 (가상경로,express.static('실제 존재 폴더 이름')); 가상경로는 마음대로, 두번째인자는 정해진대로 써야함!
//static이라는 실제 존재하는 폴더에 public이라는 경로로 접근할 수 있도록 함
app.use('/public', express.static('static'));

// 6. ejs 파일에 이미지 넣는다면? src='/public/img/1.jpg' 실제로는 static이라는 이름의 폴더지만, public이라고 가상 경로를 이용 할수있게 함

//7. ejs 템플릿 설치 : npm install ejs
//ejs템플릿을 뷰엔진으로 쓰겟다.
//이렇게되면, views 라는 폴더가 view가 모여있는 기본디렉터리가 됨
app.set('view engine', 'ejs');

//8. ejs 템플릿 사용 : 서버에서 보내준 데이터를 클라이언트가 데이터따라 바뀌어서 랜더하게 되는데
// render 의 두번째 인자는 선택사항이며, 객체 형태로 넘겨줘야 한다.
app.get('/ejs', (req, res) => {
    res.render('test', {      //test.ejs파일에 넘긴다라는 뜻 data가 넘어간다!
        title:"test 페이지 입니다!@",
        data: ['a','b','c']
    });
})

//9.form 전송, body-parser 쓰기위함 복붙, 외우기
app.use(express.urlencoded({extended:true})); //폼에도 타입이 있다. x-www-urlencoded 데이터 해석하겠다.
app.use(express.json()); // 데이터 형태를 json형태로 parsing해주겠다. = json: 딕셔너리 형태와 비슷하다.

//10.form.ejs 파일의 정보를 받는다.
app.get('/form', (req,res)=>{
    res.render('form');
})

//11. getform
//form url이(action주소로 이동하게 됨 제출 하면 form > getform)
//?뒤에는 쿼리라고 한다.
//getform이란 주소로 들어갔을때, 서버측에 보내는 요청을 딕셔너리 형태로 쿼리에 담김
app.get('/getform', (req,res)=>{
    console.log(req.query); //인풋 id, pw에 할당된 쿼리값이 딕셔너리 형태로 출력됨
    res.send("get 요청 성공");
 })

//12. postform 라우터이름 설정, app.post
//메소드가 post, 액션 /postform 만들기
//서버측에서 라우터 받아 처리하려면 .post()메소드 사용
//post의 정보는 body에 담겨온다.(get은 정보를 query로 가져왔지만)
//get 요청은 url로 직접치고 들어갈수있다.
app.post('/postform', (req,res)=>{
    console.log(req.body); 
    // res.send("post 요청 성공");
    res.render('result',{data: req.body}); //result파일을 보여줄것이다. 그리고 body에 있는 것을 사용하려면 정보를 보내줘야한다.
 })

// 마지막! 웹서버 여는법 listen(포트번호,함수)
// listen이 항상 밑으로 와야 위에 설정된 것들이 읽힘
app.listen(port,()=>{
    console.log('서버 open : ', port);
})