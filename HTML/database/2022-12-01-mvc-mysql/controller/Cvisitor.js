
const Visitor = require('../model/Visitor');

exports.visitor = (req, res) => {
    //.get_visitor(함수 인자) 콜벡으로 넘겨줫으니 Visitor.js에서도 콜벡으로 받는다 
    Visitor.get_visitor(function(result){
        console.log(result);
        //사용자에게 보여줄 화면 응답을 반드시 visitor.ejs파일에 {data : result}; 값을 넘긴다.
        res.render('visitor', { data : result });
    });
}

exports.register = (req,res) => {
    Visitor.register_visitor(req.body, function(ID){
        console.log(ID);
        //ID가 인트형으로 되어있다...send에는 숫자만 받을수없다 
        res.send(String(ID)); //쿼리를 날려서 나온 결과값이다 총 3번을 왓다리 한다는데.. 뭐지 ㅠ
    }) //모델에 함수를 만들예정
    //insert req.body안에있는 데이터가 필요
    //query의 결과값을 가지고 
}
//데이터를 보내준게 req.body에 있을것이다.
//작업목록 1.delete 무엇을? > mysql에서 우리의데이터 req.body.id에 있는 id에 해당하는 데이터를 삭제해야한다.
//2. delete를 서버 응답 > res.send를 해야 한다.
//1번은 모델에서 해야함
exports.delete = (req, res) => {
    Visitor.delete_visitor(req.body.ID, function(){
        res.send(true);
    })
}
exports.get_visitor_by_id = (req, res) => {
    //req.query.id 에 해당하는 데이터를 조회해서 서버로 그 데이터를 응답
    //서버응답 > 조회한 데이터
    //받을때 인자
    Visitor.get_visitor_by_id_model(req.query.ID, function(rows){
        res.send(rows);
    })
}

exports.update_visitor = (req, res) => {
    // req.body 데이터를 mysql에 업데이트 할 수 있도록
    // 서버에 응답 > 업데이트를 했을 때 뭐가 나올지
    Visitor.update_visitor(req.body, function(){

        res.send(true);
    })
}