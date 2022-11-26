//웹서버 여는 코드
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express(); 

const port = 8080;
app.set('view engine', 'ejs');
//ejs템플릿을 뷰엔진으로 쓰겟다.

//form 전송 > 기본적으로 2줄을 body-parser쓰기위해 복붙이나 외우기
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/static', express.static('static'));

//파일을 어디다 받을건지 알려줘야 한다.
//multer라는 친구로 파일의 경로(목적지) 선택
//uploads/ 라는 폴더가 존재해야 해서 만든다.
// const upload = multer({
//     dest:  "uploads/"
// });

//하드디스크 업로드 파일 지정할떄...
//좀더 세부적인 느낌이라 복잡하다.
//done은 첫번째로 에러를 받고..?
//저장할 경로를 설정한 것
//filename은 파일 이름을 지정..? 위에 주석처리한것으로 파일 저장하면 이름이 이상하게 저장되는 현상이 있다.
const upload = multer({
    storage: multer.diskStorage({
        destination(req,file,done){
            done( null, 'uploads/')
        },
        filename(req,file,done){
            console.log( "filename : ",req.body);
            const ext = path.extname(file.originalname);// 바나나.jpg  path모듈로.. 오리지널이름은 원래 기본이름이고, 원래이름을 가져와서 확장자 축출하고 
            // const filename = Date.now() + ext; // 123213123.jpg 지금날짜 밀리세컨트로 파일이름이 됨 (멀터로)
            const filename = req.body.name + ext; // 머터는 파일보다 늦게 지정된 얘들은 처리 못합니다. 즉 파일에서 처리해야하는 데이터는 파일보다 위에
            done( null, filename);
        }
    })
})



// 미들웨어 , , > next() 순차적 실행
// app.get('/', test, test2,(req,res)=>{ //url 동작하는 로직 사이에 미들웨어는: 클라이언트가 접속햇을때 test 실행 후 핼로 함수 실행 다음 
//     console.log('req.name : ', req.name);
//     console.log('hello');
//     res.send('hello');
// })

// function test(req, res, next){
//     console.log(req.query);
//     console.log('test 함수입니다.');
//     next(); // test 미들웨어 함수가 끝났고, 그 다음을 진행해라
// }
// function test2(req,res,next){
//     console.log('test2 함수입니다');
//     next();
// }

app.get('/file',(req,res)=>{
    res.render('file');
});



// 파일업로드 다 시키기고 동작해라
//upload.single('userfile') 만들어져있는 기능을 실행하면, 머터라는 친구가 파일 실행하고 req.file에 담아서 전달
//single은 한개의 파일만 보내겟다.
//req.file~ 어떤 경로에 저장되어있는지를 담아서 전달
//userfile 클라이언트에서 보내는 input에서의 타입이 file인 네임 속성값이 userfile로 넘어온 값을 이용해 파일 업로드를 할 수 있는 것
app.post('/upload-single', upload.single('userfile'),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
    res.send('upload complete');
});

app.post('/upload-array', upload.array('userfile'),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
    res.send('upload complete');
});

app.post('/upload-fileds', upload.fields([{name:'userfile1'},{name:'userfile2'},{name:'userfile3'}]),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
    res.send('upload complete');
});

 // 웹서버 여는법 listen(포트번호,함수)
app.listen(port,()=>{
    console.log('서버 open : ', port);
})
