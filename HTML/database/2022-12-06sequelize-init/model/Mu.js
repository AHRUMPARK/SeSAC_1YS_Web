//이 함수가 실행되어야만 시퀄라이즈가 정의 시퀄라이즈 디파인으로 모델 정의
// 이걸 리턴해서 어딘가로 저장 할 것이다. > Index.js
const Muser = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "test_2",//creat table visitor (ID, name, comment)
        {
            id : { // ID int not null primary key auto_increment
                type : DataTypes.INTEGER,
                allowNull : false, //null을 허용 x
                primaryKey : true, //기본값이 false여서, primarkey는 아니여서 true
            },
            pw : {
                type : DataTypes.STRING(20),
                allowNull :  false
            },
            name : { // name varchar(10) not null
                type : DataTypes.STRING(20),
                allowNull : false
            }
        },
        {
            tablename : "test_2", //select * from visitor; > 자동으로 visitors라고 만든다.
            //기본적으로 sql만들때 테이블을 복수형으로 만드려고한다. 그래서 테이블네임을 얼리겠다라는 의미
            freezeTableName : true, //복수형태가 아닌 그대로 사용하겠다는 의미
            timestamps : false //기본값 true false라고 하지 않으면, 데이터 row가 생성될때마다 생성시간, 수정시간이 계속 찍고 저장하려고 든다.
            //creatAt modifyAt 컬럼에 저장하려고 듬 (필요하면 컬럼 만들어두고 true 하면 됩니다.)
            // collate, charset : 테이블 한글 인코딩 /but 데이터베이스 자체에 한글베이스 해놔서 다들 자동 한글 가능
    
        }
    )
}
//씨퀄라이즈를 사용하려면, 실제 데이터베이스 테이블 정보를 자바스크립트 언어로 정의해줘야 한다.

module.exports = Muser;