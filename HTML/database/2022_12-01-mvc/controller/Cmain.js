//모델 기능 Test로 설정
const Test = require('../model/Test');
const User = require('../model/Test');
//const login = require('')

exports.main = (req, res) => {
    //Test.js에서 리턴되는 'hello'라는 문자열은 여기서 hi변수에 담긴다
    // let hi = Test.hello();
    //hi에 hello가 들어가서 메인주소로 들어가면 'hello'가 보인다.
    // res.send(hi);
    res.render('login');
}
exports.login = (req, res) => {
    let info = Test.login();
    if ( req.body.id == info.id && req.body.pw == info.pw ){
        res.send({msg: "<p style='color:blue'>post 로그인 성공</p>"});
    } else {
        res.send({msg:"<p style='color:red;'>post 로그인 실패 ( 아이디 또는 비밀번호가 틀렸습니다.)"});
    }
}


//exports를 여러개 하고 있는데 controller라는 하나로 
//controller객체 .main, .test .post
//module.exports = {
//     main : main,
//     test : test,
//     post : post
// } 문법상 아니지만, 이렇게 이해하면 된다.

exports.login2 = (req, res) => {
    let users = User.user2();
    //'스프렉틱스//1234//spreatics'codee//4321//코디'; 값이 담긴다.
    let user_list = users.split('\n');
    //user_list = [ '스프렉틱스//1234//spreatics', 'codee//4321//코디'];
    //users에 담긴 얘들을 split 자를 것이다. \n n=앤터 이스케이프 문자
    //앤터를 기준으로 자르면, 배열로 된다.
    let login_flag = false; //로그인 플레그에 성공을 안했다는 가정
    let name = '';
    
    for(let i = 0; i < user_list.length; i++){ //사람 수만큼 for돈다
        let user = user_list[i].split('//');
        //0번째값이  user = ['스프렉틱스, 1234, spreatics'];
        if ( req.body.id == user[0] && req.body.pw == user[1] ){  //id = 스프렉티스고 처음부터if를 만족해서 바디에 들어오게 된다.
            login_flag = true; 
            name = user[2]; }
            break; //성공을 하면, 다음건 볼필요 없으니 break
        }
        if(login_flag)res.send(`${name}님 환영합니다.`);//로그인플레그가 트루면
        else res.send('로그인 실패');
}
