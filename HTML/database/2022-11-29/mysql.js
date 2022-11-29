const mysql = require('mysql');

//커낵션cnn, 객체안의 함수와 그 옵션
//.createConnection 옵션에 적어둔 정보에 해당하는 데이터베이스에 연결해준다.
const cnn = mysql.createConnection({
    host: 'localhost',       //'127.0.0.1'  로 해도된다.
    user: 'user',            //사용자 root 기본(최고 권위) > 코드로서 연결 x (외부 접근 허용 x) => root가 아닌 새로운 계정을 만들어야 한다.
    password: '0530arum',
    database: 'ar_test'
});
//query('sql문','콜벡함수') sql문을 실행했을때 err객체에 어떤 err인지 담긴다. err = undefined; //에러가 발생하지 않으면 이렇게 뜨고 
//콜벡 ( 에러경우, 결과)
cnn.query('select * from user', (err, result) =>{   //유저에 대한 것을 가져오겟다
    if (err) throw err; //에러가 뭐라하는지 띄움
    console.log(result); //에러가 발생하지 않으면~ 결과 값이 잘 담긴다
});

// # mysql 사용자 추가하기
// CREATE USER 'user'@'%' IDENTIFIED BY '비밀번호';
// # DB 권한 부여 (모든 DB에 접근 가능하도록)
// GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
// # 현재 사용중인 MySQL의 캐시를 지우고 새로운 설정을 적용하기 위해 사용
// FLUSH PRIVILEGES; >> 실행

// select host, user, plugin, authentication_string from mysql.user;    >> 잘 만들어졌는지 조회 하는 것

// # mysql 계정 비밀번호를 바꾸고 싶을 때
// ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';