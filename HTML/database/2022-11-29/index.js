const express = require('express');
const app = express();
const port=8080;
const mysql = require('mysql');

app.set('view engine', 'ejs');

const cnn = mysql.createConnection({
    host: 'localhost',       
    user: 'user',            
    password: '0530arum',
    database: 'ar_test'
});

app.get('/', (req,res)=>{
    cnn.query('select * from user', (err, result) =>{   //유저에 대한 것을 가져오겟다
        if (err) throw err; 
        console.log(result);
        res.render('index',{ rows : result }); //key는 원하는 이름 : 값은 위에서 받은 result
    });
   
});

app.listen(port, ()=>{
    console.log('open', port);
})