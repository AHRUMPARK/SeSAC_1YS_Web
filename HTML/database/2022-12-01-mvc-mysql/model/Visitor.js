const mysql = require('mysql');

const cnn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : '0530arum',
    database : 'ar_test'
});

//cb 매개변수로 받고 콜벡함수로 받아온
// cnn.query > sql문을 실행시켜서 뒤에있는 rows매개변수에 반환한다.
//에러가 없을 경우 'visitor : ', rows 실행 rows는 결과[ RowDataPacket { ID: 1, name: '홍길동', comment: '내가 왔다' } ]
//cb(rows)
exports.get_visitor = (cb) => {
    var sql = 'select * from visitor ';
    cnn.query(sql, (err, rows)=>{
        if(err) throw err;
        console.log('visitor : ', rows );
        
        // console.log(result);
        // res.render('visitor', { data : result });
        cb(rows);
    })
}
exports.register_visitor = (info, cb) => {
    //info = req.body; {name : , comment : } 클라이언트가 넘겨준..
    //클라이언트 정보를 콘트롤러에서 넘겨줘야한다
 
    var sql = `insert into visitor(name, comment) values('${info.name}', '${info.comment}');`//아이디는 자동생성 되니 굳이 적지 않는다. 클라이언트가 넘겨준 정보를 넣어야 하는데 
    
    cnn.query(sql, (err, result)=>{
        if(err) throw err;

        console.log(' insert result : ', result );
        cb(result.insertId);
    })
}