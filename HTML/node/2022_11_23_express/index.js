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
// src='/public/img/1.jpg' 실제로는 static이라는 이름의 폴더지만, public이라고 가상 경로를 이용 할수있게 함
app.use('/public', express.static('static'));


//6. ejs 템플릿 설치 : npm install ejs
//ejs템플릿을 뷰엔진으로 쓰겟다.
//이렇게되면, views 라는 폴더가 view가 모여있는 기본디렉터리가 됨
app.set('view engine', 'ejs');

//7. ejs 템플릿 사용 : 서버에서 보내준 데이터를 클라이언트가 데이터따라 바뀌어서 랜더하게 되는데
// render 의 두번째 인자는 선택사항이며, 객체 형태로 넘겨줘야 한다.
app.get('/ejs', (req, res) => {
    res.render('test', {      //test.ejs파일에 넘긴다라는 뜻 data가 넘어간다!
        title:"test 페이지 입니다!@",
        data: ['a','b','c']
    });
})

//form 전송, body-parser 쓰기위함 복붙, 외우기
app.use(express.urlencoded({extended:true})); //폼에도 타입이 있다. x-www-urlencoded 데이터 해석하겠다.
app.use(express.json()); // 데이터 형태를 json형태로 parsing해주겠다. = json: 딕셔너리 형태와 비슷하다.


// 웹서버 여는법 listen(포트번호,함수)
// listen이 항상 밑으로 와야 위에 설정된 것들이 읽힘
app.listen(port,()=>{
    console.log('서버 open : ', port);
})