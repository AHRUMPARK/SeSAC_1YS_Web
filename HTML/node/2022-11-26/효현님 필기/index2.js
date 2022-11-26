const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// 파일이 들어갈 경로를 설정해줘야 함, multer 객체를 사용하면 된다.
// 경로에 필요한 폴더도 생성해줘야 한다.
// const upload = multer({
//     dest : 'uploads/'
// });

// 경로 + 상세 설정
const upload = multer({
    // diskStorage => 하드 디스크에 저장할 때 사용하는 함수
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            console.log(req.body);
            const ext = path.extname(file.originalname);
            // file.originalname => 파일 원래 이름.확장자를 불러옴
            // path.extname() 함수를 이용해서 확장자만 추출 함
            const filename = Date.now() + ext;
            // 날짜 + .확장자 결합
            done(null, filename);
        }
    })
});


app.get('/file', (req, res) => {
    res.render('file2');
});

// 1개 파일을 사용할 때는 single() 함수를 사용한다.
// upload.single('userfile')
// <input type="file" name="userfile"> .single('form 의 name과 같아야 한다')
app.post('/upload', upload.single('userfile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send('upload complete');
});
// upload.single() 함수는 multer의 내장 함수로 이름을 받아서 업로드까지 하고 next() 함수까지 실행해주는 역할을 한다.
// single() 함수는 1개의 파일만 업로드 할 때 사용한다.


// 2개 이상의 파일을 보내면 array로 받아진다.
// single() 함수 대신에 array 함수를 사용한다.
app.post('/upload-multiple', upload.array('userfile'), (req, res) => {
    // 2개 이상의 파일이기 때문에 req.file이 아닌 req.files로 사용한다.
    console.log(req.files);
    console.log(req.body);
    res.send('upload complete multiple');
});


// 1개씩 여러 번의 파일을 업로드하는 경우
// 1개씩 여러번의 파일 업로드를 하는 경우 fields() 함수를 사용하며, list - json 방식으로 받는다.
app.post('/upload-fields', upload.fields([{name: 'userfile1'}, {name: 'userfile2'}, {name: 'userfile3'}]), (req, res) => {
    // 2개 이상의 파일이기 때문에 req.file이 아닌 req.files로 사용한다.
    console.log(req.files);
    console.log(req.body);
    res.send('upload complete fields');
});


app.get('/', test, test2, (req, res) => {
    console.log('req.name : ', req.name);
    console.log('Hello');
    res.send('Hello');
});

function test(req, res, next) {
    req.name = '12345';
    console.log(req.query);
    console.log('test 함수입니다.');
    next();
}

function test2(req, res, next) {
    console.log('test2 함수입니다.');
    next();
}

app.listen(port, () => {
    console.log('server open : ', port);
});

