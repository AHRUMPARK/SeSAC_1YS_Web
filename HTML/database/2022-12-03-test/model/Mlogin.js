const mysql = require('mysql');

const cnn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : '0530arum',
    database : 'ar_test'
});


exports.register_user = (info, cb) => {
    var sql = `insert into test_1(ID, PASSWORD, NAME) values('${info.ID}','${info.PW}','${info.name}')`;
    cnn.query(sql, function(err, result){
        if(err) throw err;
        console.log( 'insert result : ', result);
        cb(result);
    })
}

exports.post_login = (ID, PW, cb) => {
    var sql = `select * from test_1 where ID ='${ID}' and PASSWORD ='${PW}' limit 1;`
    cnn.query(sql, function(err, rows){
        if(err) throw err;
        console.log('아이디, 비밀번호 조회 : ', rows);
        cb(rows);
    })
}

exports.get_user = (ID, cb) => {
    var sql = `select * from test_1 where ID = '${ID}'`;
    cnn.query(sql, function(err, rows){
        if(err) throw err;
        console.log('user : ', rows);
        cb(rows);
    })
}
exports.update_profile = (data, cb) => {
    var sql = `update test_1 set NAME = '${data.name}', PW = '${data.pw}' WHERE ID = '${data.id}'`
    cnn.query(sql, function(err, rows){
        if(err) throw err;
        cb();
    })
}
exports.delete_user = (data, cb) => {
    cnn.query(`delete from test_1 where ID ='${data.id}'`, (err)=>{
        if(err) throw err;
        cb();
    })
}