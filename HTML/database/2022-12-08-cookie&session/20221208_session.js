const express = require('express');
const session = require('express-session');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.use('/satatic', express.static(__dirname+'/static'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//함수안에 옵션 객체를 넣는다.
app.use(session({
    //필수,
    secret : '1234' ,  //암호화 결정 / 임의의 문자열로 세션을 암호화함.
    resave : false, //변경사항이 없어도 다시 저장을 할거냐? > true : 모든 요청마다 session에 변화가 업어도, session을 다시 저장함 그래서 false...
    saveUninitialized : true, //초기화되지 않은 세션을 저장하냐 마냐
    //밑은 선택 사항
    //cookie : {
      //  httpOnly : true,
        //maxAge : ..
    //},
    secure : true //https(보안서버), true : 보안서버에서만 작동
}))


app.get('/', (req, res) => {
    // islogin이 false일때 로그인 버튼을 보여주고 true일때
    console.log('메인 페이지 세션 체크: ', req.session.user);
    if(req.session.user) {
        res.render("main", { isLogin : true, id : req.session.user });
    } else {
        res.render("main", { isLogin : false });
    }
    // res.send('세션 수업');
});

const user = {id : "a", pw : "1"};

app.get('/login', (req, res)=>{
    res.render('login');
})
app.post('/login', (req,res)=>{
    // cookies = { } 객체 형태였다. 세션도 마찬가지!
    // req.session = { }
    //req 클라이언트 객체요청 탄 이유 : 클라이언트마다 고유의 세션 id를 가짐, 서버는 그 세션 id를 읽어와야하기 때문에 클라이언트를 타고 온다.
    // 로그인햇는지 여부를 세션에 저장
    if(req.body.id == user.id && req.body.pw == user.pw ){
        req.session.user = req.body.id ; //req.body.id 내 공간에 내 아이디를 저장한 것
        console.log('로그인 성공');
        res.send(true);
    }
    else{
        console.log('로그인 실패');
        res.send(false);
    }
    // res.send("세션 생성 성공 ");
});

app.delete('/logout', (req, res) => {
    req.session.destroy(function(err){
        if(err) throw err;
        res.send(true);
    })
})
//로그인을 햇을때만.... 로그아웃햇을때는 이 값을 없애야 한다. req.session.destroy(function(err){
// res. send("로그아웃 성공")
//})

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});