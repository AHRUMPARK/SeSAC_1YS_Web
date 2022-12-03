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
//서버응답이 이루어진다음에 되어야 해서 콜벡을 받아야함
//삭제할 ID 받아올 거고, 그 아이디를 쓴다.
exports.delete_visitor = (ID, cb) => {
    var sql = `delete from visitor where ID = ${ID}`;
    
    cnn.query(sql, (err, result) => {
        if (err) throw err;//예외처리
        console.log('delete result: ', result );
        cb(result); //뭐라고 나올지 모르겟지만 콜벡처리 해보자
    })
}

exports.get_visitor_by_id_model = (ID, cb) => {
    var sql = `select * from visitor where ID = ${ID}` //아이디를 받아와서 조회 할것이다.
    cnn.query(sql, (err, rows)=>{
        if(err) throw err;
        console.log('select by id : ', rows );
        cb(rows[0]);
    })
}

exports.update_visitor = (info, cb) => {
    //var sql = `update visitor set name =???, comment=??? where id=???` req.body에있는 ???들
    // info로 받겟다는 매개변수
    //ID가 뭐뭐인 얘의 네임과 코멘트를 변경
    var sql = `update visitor set name ='${info.name}', comment='${info.comment}' where ID=${info.ID}`
    cnn.query(sql, (err, result)=>{
        if(err) throw err;
        console.log('update result: ', result);
        cb();
    })
}