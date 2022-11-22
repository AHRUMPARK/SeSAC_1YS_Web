// 서버 여는 순서 주의
// 웹서버 모듈은 가장 위에서 불러오고
// app.use/app.set 미들웨어 설정은 위에
// app.get/app.post 얘내들은 밑에 있어야 한다.
// 그리고 마지막에 app.listen 서버를 열어줘야 한다. 이미 서버를 열었다면, 뒤에 설정이 나오지 않는다.


//웹서버 여는 코드
const express = require('express');
const app = express(); //필요한 메소드가 app 객체에 있다. 여기까지 웹서버 생성 기본코드

//포트 정의 1023 이하의 숫자 안됨!
const port = 8080;
app.set('view engine', 'ejs');
//ejs템플릿을 뷰엔진으로 쓰겟다.
//이렇게되면, views 라는 폴더가 view가 모여있는 기본디렉터리가 됨

//form 전송
//기본적으로 2줄을 body-parser쓰기위해 복붙이나 외우기
app.use(express.urlencoded({extended:true})); //폼에도 타입이 있다. x-www-urlencoded 데이터 해석하겠다.
app.use(express.json()); // 데이터 형태를 json형태로 parsing해주겠다. = json: 딕셔너리 형태와 비슷하다.
// {
//     key: value
// }


//브라우저에 들어가서 할 행동
//첫번째 인자 주소(도메인 빼고 > 8080빼고) localhost:8080/test 원하는 페이지로 가능 '/'은 일반
//res 서버 to 클라이언트 (서버의 응답), req 클라이언트 to 서버(클라이언트의 요청)
// get ( 주소, 매개변수) 매개변수 반드시! res.send 웹브라우저 상에서 랜더링, 보여줌 그래서 res와 send를 같이 쓸 수 있다.
//파일 수정시 파일을 꺼야 한다 (컨트롤 + c )
app.get('/', (req,res) => {
    res.send(' hello express!');
})

//localhost:8080/test
//테스트로 접속할 수 있는 라우터를 만듦
//.sendFile()에 들어올 경로는 무조건!! 절대경로
//__dirname기본으로 지정된 변수고 현재 실행중인 폴더경로가 담긴 변수 + '/views/index.html 이런식으로도 가능하다.
//get 메소드로 test 라우터를 만들고, sedfile로 파일경로 가져옴
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})


//이파일이 아닌 이 파일에 포함된 html같은 파일, ejs파일 등을 건들여도 프론트엔드측 언어라서 수정사항이 변경된다.
//서버측 파일 백엔드 파일 수정은 껏다 켯다 해줘야 함.


// 클라이언트가 어떠한 경로를 접속햇을때 먼저 미들웨어부터 들어가게 됨
// 클라이언트가 원하는 곳으로 갈 수 있는 코드를 적어줄것임
// app.use 미들웨어 등록 (가상경로,express.static('실제 존재 폴더 이름')); 
//가상경로는 마음대로, 두번째 인자는 express.static(폴더이름) 무조건!
app.use('/static', express.static('static'));
//static이라는 실제 존재하는 폴더에 publlic이라는 경로로 접근할 수 있도록 함
// src='/public/img/1.jpg' 실제로는 static이라는 이름이지만, public이라고 가상경로를 이용할수있게함
// 해당파일과 서버파일을 둘다 수정해야 사진같은 것들이 뜬다.
// 가상 경로 = 폴더 이름 같은 이름으로 해야 편하다. app.use('/static', express.static('static')); src='/static/img/1.jpg'
// 하위 폴더들도 영향을 받기때문에 app.use 일일이 해줄 필요 없다

// app.use(express.static('static'));
//src ="img/1.jpg" 가상경로가 없을때

// localhost:8080/ejs
//뷰엔진이 render라는 메소드를 쓰면, 해당 view를 가져온다.
//확장자를 쓰지 않아도, 뷰엔진이 알아서 ejs파일을 찾아감
//"/test.test"가 되면 test폴더안의 test.ejs파일을 찾겠다.
// app.get('/ejs', (req, res) => {
//     res.render('index');
// })

//서버에서 보내준 데이터를 클라이언트가 데이터따라 바뀌어서 랜더하게 되는데
// render 의 두번째 인자는 선택사항이며, 객체 형태로 넘겨줘야 한다.
app.get('/ejs', (req, res) => {
    res.render('index', {      //index.ejs파일에 넘긴다라는 뜻 data가 넘어간다!
        title:"index 페이지 입니다!@",
        data: ['a','b','c']
    });
})

app.get('/test_1', (req,res)=>{
    res.render('test_1',{
        title:"실습1 문제입니다.",
    });
})

app.get('/form', (req,res)=>{
    res.render('form');
})
app.get('/test_2_form',(req,res)=>{
    res.render('test_2');
})

app.get('/test_2_getform',(req,res)=>{
    console.log(req.query);
    res.send('test_2_get요청 성공!')
})
//form url이(action주소로 이동하게 됨 제출 하면 form > getform)
//?뒤에는 쿼리라고 한다.
//getform이란 주소로 들어갔을때, 서버측에 보내는 요청을 딕셔너리 형태로 쿼리에 담김
app.get('/getform', (req,res)=>{
   console.log(req.query); //인풋 id, pw에 할당된 쿼리값이 딕셔너리 형태로 출력됨
   res.send("get 요청 성공");
})

//라우터이름 설정, app.post
//메소드가 post, 액션 /postform 만들기
//서버측에서 라우터 받아 처리하려면 .post()메소드 사용
//post의 정보는 body에 담겨온다.(get은 정보를 query로 가져왔지만)
//get 요청은 url로 직접치고 들어갈수있다.
app.post('/postform', (req,res)=>{
    console.log(req.body); 
    // res.send("post 요청 성공");
    res.render('result',{data: req.body}); //result파일을 보여줄것이다. 그리고 body에 있는 것을 사용하려면 정보를 보내줘야한다.
 })

app.post('/test_2_post',(req,res)=>{
    console.log(req.body);
    res.send('post성공');
})

 // 웹서버 여는법 listen(포트번호,함수)
 // listen이 항상 밑으로 와야 읽는다!!! 중요
app.listen(port,()=>{
    console.log('서버 open : ', port);
})
// 위의 명령어는 기본이기 때문에 외웁시다. 서버를 열기만 해서 로컬서버 아무것도 안뜸
 
