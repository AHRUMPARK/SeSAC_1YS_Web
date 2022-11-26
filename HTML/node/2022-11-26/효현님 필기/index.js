const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// app.get('/', test, (req, res) => {
//     console.log('Hello');
//     res.send('Hello');
// });
// 미들웨어는 url과 함수 사이에 적어준다.
// test 함수를 먼저 실행시키고 뒤에 함수를 실행시키겠다라는 의미

app.get('/', test, test2, (req, res) => {
    console.log('Hello');
    res.send('Hello');
});

// function test() {
//     console.log('test 함수입니다.');
// }
// 이 상태에서 사용하면 test 함수 실행 이후 다음 함수 실행시 Error가 발생할 수 있다.

function test(req, res, next) {
    console.log(req.query);
    console.log('test 함수입니다.');
    next();
}
// 미들웨어 함수에서는 req, res 객체를 사용할 수 있으며 마지막에 next도 사용이 가능하다.
// 마지막에 next() 함수를 실행해야 test 미들웨어 함수가 끝났고, 다음 함수로 넘어간다 라는 의미가 전달된다.

function test2(req, res, next) {
    console.log('test2 함수입니다.');
    next();
}

app.listen(port, () => {
    console.log('server open : ', port);
});

