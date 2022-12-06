// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model/index");
// db = {
//     "Sequelize" : Sequelize,
//     "sequelize" : sequelize,
//     "Visitor" :  "Visitor.js에서 리턴 받은 값"
// }에서 visitor만 가져오겟다

exports.visitor = async (req, res) => { //await는 async 함수 내에서만 가능해서 지정해줘야 한다.
    let result = await Visitor.findAll(); //await는 Visitor.findAll()실행될떄까지 기다렷다가 결과가 result에 담기면, 그다음을 실행
    res.render('visitor', {data : result});

    // Visitor.findAll() //시퀄라이즈 .findAll 함수 = 셀렉트문 실행/프로미스 객체
    // .then((result)=>{
    //     console.log(result);
    //     console.log(result[0].id); //[].dataValues가 기본이라 안해도 된다.
    //     res.render("visitor", {data: result});
    // })

    // select * from visitor ; 
    // Visitor.get_visitor(function(result){
    //     console.log(result);                 
    //     res.render("visitor", {data: result});
    // })
}

exports.register = async (req, res) => {
    let result = await Visitor.create({
        name : req.body.name,
        comment : req.body.comment
    }); //insert문은 create(인자 객체)
    console.log(result);
    res.send(String(result.id));

    // let data = {
    //     name : req.body.name,
    //     comment : req.body.comment
    // }
    // Visitor.create(data) //insert문은 create(인자 객체)
    // .then((result)=>{
    //     console.log(result);
    //     res.send(String(result.id));
    // })


    // `insert into visitor(name, comment) values('${info.name}', '${info.comment}');`//아이디는 자동생성 되니 굳이 적지 않는다. 클라이언트가 넘겨준 정보를 넣어야 하는데 
    // Visitor.register_visitor( req.body, function(id){
    //     console.log(id);
    //     res.send(String(id));
    // })
}

exports.delete = async (req, res) => {
    // mysql req.body.id에 해당하는 데이터를 delete
    // 서버 응답 res.send 
    let result = await Visitor.destroy({ //delete
        where : { id : req.body.id }
    });
    console.log(result);
    res.send(true);

    // Visitor.destroy({ //delete
    //     where : { id : req.body.id }
    // })
    // .then((result)=>{
    //     console.log(result);
    //     res.send(true);
    // })
    //`delete from visitor where ID = ${req.body.id}`;
    // Visitor.delete_visitor(req.body.id, function(){
    //     res.send(true);
    // })
}

exports.get_visitor_by_id = async (req, res) => {
    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터

    let result = await Visitor.findOne({
        where : { id : req.query.id }
    });
    res.send(result);

    // select id, name, comment form visitor2;
    // select id, name, comment form visitor2 order by id DESC limit 1; 오름차순
    // attributes : [ "id", "name", "comment" ] 를 하면, 부분 조회가 가능하다.
    // console.log(req.query.id);
    // Visitor.findOne({//한개만 찾는다.
    //     attributes : [ "id", "name", "comment" ],
    //     where : { id : req.query.id },
    //     order : [["id", "DESC"]],
    //     limit : 1
    // })
    // .then((result)=>{
    //     console.log(result);
    //     res.send(result);
    // })

    // Visitor.findAll({
    //     where : { ID : req.query.id },
    //     limit : 1
    // })
    // select * from visitor where ID = req.query.id; sql문 
    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
}

exports.update_visitor = async (req, res) => {
    // req.body 데이터를 mysql 에 update 할 수 있도록
    // 서버의 응답 
    // 어찌 업데이트 할지 즉, set 다음 구문

    let result = await Visitor.update(
        {
            name : req.body.name,
            comment : req.body.comment
        },
        { where : { id : req.body.id } }
    );
    console.log(result);
    res.send(true);

    // let data = {
    //     name : req.body.name,
    //     comment : req.body.comment
    // }
    // Visitor.update(data, {
    //     where : { id : req.body.id }
    // })
    // .then((result)=>{
    //     console.log(result);
    //     res.send(true);
    // })

    //`update visitor set name ='${req.body.name}', comment='${req.body.comment}' where ID=${req.body.ID}`
    // Visitor.update_visitor(req.body, function(){
    //     res.send(true);
    // });
}