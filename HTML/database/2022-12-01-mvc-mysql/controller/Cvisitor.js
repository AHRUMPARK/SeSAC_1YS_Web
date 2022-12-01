
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