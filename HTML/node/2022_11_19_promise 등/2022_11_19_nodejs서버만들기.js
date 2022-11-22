const http = require('http');
const fs = require('fs').promises;
const server = http.createServer( function (req, res ){ //createServer는 req(클라이언트의 서버요청) res(서버의 그에 대한 응답)
        //res.write('<h1>HELLO</h1>');   //클라이언트가 8080으로 접속하면 실행될 함수
        //res.end('<hr>');   //res.end를 해주지 않으면, 마침표가 없어서 끝나지 않음 = 더이상 응답을 보내지 않겟다. (서버의 응답)
        //위처럼 할 수도 있지만, 이미 만들어진 파일을 가져올수도 있다.
        fs.readFile('./2022_10_27_Cafe drink documentation.html')
        .then(function(data){
            res.end(data.toString()); //해당 파일을 보낸다.
        });
//서버.리슨(port, callback)
//서버를 첫번째 매개변수의 포트로 실행한다.
    });
//서버라는 객체 
//createServer로 만들어진 객체는 .on이라는 얘를 쓸수있고, 얘는 이벤트를 등록하는 함수임
//server.on(); // 이벤트 등록


server.listen(8080, function(){         //서버실행 하고, 클라이언트를 기다림 
    console.log('8080번 포트로 실행'); 
}); 

//홈페이지 접속 방법 : 브라우저에 로컬호스트 : 포트번호 > localhost:8080
//파일을 수정 : 현재 로딩중이면 x, 터미널에서 실행 취소 : ctrl + c 해주고, 파일 수정 한 것을 저장해야 된다.
//실행할때 멈춰있다 > 파일이 계속 실행중인 상태에서 서버에서 접속해야한다.
//빠져나오고 접속하면, 8080을 연다는 의미
//address already in use :::8080 > 8080으로 이미 서버가 열어있는 상태에서, 다시 열어달라고 우리가 요청해서 생긴 에러
//> 여러 터미널 중에서 서버 열린게 있는지 확인해야한다. 같은 포트로 두개 못염, 한개만 사용
//서버 코드 수정시 서버를 껏다 켜야한다.(다시 실행 후 접속)