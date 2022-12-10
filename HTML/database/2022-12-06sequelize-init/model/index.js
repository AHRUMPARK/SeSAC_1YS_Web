const Sequelize = require('sequelize'); //데이터베이스 적어놓은 config.json불러와야한다
const config =require('../config/config.json')['development']; //제이슨 파일이여서 확장자까지 입력, 그곳의 [키]

// config =  "development" : {
//     "host" : "localhost",
//     "database" : "ar_test",
//     "username": "user",
//     "psssword" : "0530arum",
//     "dialect" : "mysql"
// }
const db = {};
//인자 네개 1.데이터베이스 이름(config에 저장되어있다.)2.유저이름3.비밀번호4.데이터베이스 전체 정보
//딕셔너리 형태 아니고 인자임 / 지금 커넥션중임
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

//키벨류 설정 해준다.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//모델에대한 정의가 끝나고 이 함수 자체를 실행시켜야 한다.
db.Visitor = require("./Visitor")(sequelize, Sequelize);
//첫번째 인자는 모델 대문자 인자가 받고 있다 => 정의시킴
//두번째 인자는 모델 호출해온것을  Visitor파일에서 받고있다 시퀄라이즈 안에 DataTypes에 받고있다.
//우리가 만든 모델이름

db.User = require("./User")(sequelize, Sequelize); //db의 얘들 가져오는 법
db.Product = require("./Product")(sequelize, Sequelize);
db.Payment = require("./Payment")(sequelize, Sequelize);

//즉, 포링키 걸때는 아래것까지 두개의 함수 걸어야 합니다!!
db.User.hasMany(db.Payment,{
    foreignKey : "user_id", //참조하는 주체 payment의 user_id
    sourceKey : "user_id",//참조할 소스 : user테이블의 user_id를 참고
    onDelete : "cascade"
});//유저 한사람은 여러 결제내역을 가질 수 있다.

//페이먼트의 입장 > 뭘 바라보냐? 참조하냐?
db.Payment.belongsTo(db.User,{
    foreignKey : "user_id", //참조하는 주체 payment의 user_id
    sourceKey : "user_id",//참조할 소스 : user테이블의 user_id를 참고
    onDelete : "cascade"
});

db.Product.hasMany(db.Payment,{
    foreignKey : "Product_id", 
    sourceKey : "Product_id",
    onDelete : "cascade"
});

db.Product.belongsTo(db.User,{
    foreignKey : "Product_id", 
    sourceKey : "Product_id",
    onDelete : "cascade"
});
// db = {
//     "Sequelize" : Sequelize,
//     "sequelize" : sequelize,
//     "Visitor" :  "Visitor.js에서 리턴 받은 값"
// }

module.exports = db; //db들 exports
//나중에 index.js 를 불러오는 곳은 소문자 대문자 sequlize를 사용할 수 있다.