const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express(); 
const port = 8080;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/uploads', express.static('uploads'));

const upload = multer({ 
    storage: multer.diskStorage({
        //폴더위치 지정 uploads라는 폴더
        destination(req,file,done){
            done(null, 'uploads/')
        },
        filename(req,file,done){
            console.log("filename : ", req.body);
            const ext = path.extname(file.originalname);//확장자 축출
            done( null, req.body.name + ext );//이름값을 보내지 않으면 .png로 와서 사이트에 사진이 보이지 않음 ㅠㅠ
        }
    })
 });

app.get('/test_1', (req,res)=> {
    res.render('test_1');
})

app.get('/test_2', (req,res)=> {
    res.render('test_2');
})

app.post('/test_1', upload.single('img'),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
    res.render('result',{ data : req.file.path });
    //res.render('result',{data : req.body});
});

app.post('/test_2', upload.single('img'),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
    res.send({ data : req.file.path});
})

 // 웹서버 여는법 listen(포트번호,함수)
app.listen(port,()=>{
    console.log('서버 open : ', port);
})
