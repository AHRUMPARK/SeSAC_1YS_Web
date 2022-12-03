const mysql = require('mysql');

const cnn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    password : '0530arum',
    database : 'ar_test'
});

exports.get_user = (cb) => {
    var sql = ` select *  from test_1 `;
    cnn.query(sql, (err, rows)=>{
        if(err) throw err;
        console.log('user : ', rows);
        cb(rows);
    })
}
exports.register_user = (info, cb) => {
    var sql = `insert into test_1(ID, PASSWORD, NAME) values('${info.ID}','${info.PW}','${info.name}')`;
    cnn.query(sql, (err, result)=>{
        if(err) throw err;
        console.log( 'insert result : ', result);
        cb(result);
    })
}