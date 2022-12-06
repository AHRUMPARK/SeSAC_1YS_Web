const Sequelize = require('sequelize'); 
const config =require('../config/config.json')['development'];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Muser = require("./Mu")(sequelize, Sequelize)
module.exports = db;

// exports.post_signup = (data, cb) => {
//     let sql = `INSERT INTO user(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`;
//     cnn.query( sql, function(err){
//         if ( err ) throw err;
//         cb();
//     });
// }

// exports.post_signin = (id, pw, cb) => {
//     let sql = `SELECT * FROM user WHERE id='${id}' and pw='${pw}' limit 1;`;
//     cnn.query( sql, function(err, rows){
//         if ( err ) throw err;
//         cb(rows);
//     });
// }
// exports.get_user = (id, cb) => {
//     let sql = `SELECT * FROM user WHERE id='${id}' limit 1;`;
//     cnn.query( sql, function(err, rows){
//         if ( err ) throw err;
//         cb(rows);
//     });
// }

// exports.update_profile = (data, cb) => {
//     let sql = `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
//     cnn.query( sql, ( err ) => {
//         if ( err ) throw err;
//         cb();
//     })

// }
// exports.delete_user = (id, cb) => {
//     cnn.query(`DELETE FROM user WHERE id='${id}'`, (err) => {
//         if ( err ) throw err;
//         cb();
//     });
// }