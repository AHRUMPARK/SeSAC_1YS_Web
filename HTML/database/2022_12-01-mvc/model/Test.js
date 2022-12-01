exports.hello = function(){
    return 'hello';
}
//hello 라는 함수를 만들었고, 'hello'라는 문자열을 반환 하고 있다.
//mysql 이런데서는 값을 받아오면, return 해야 함, 함수를 사용 할 때 어떤 값을  리턴할 수 있도록
//cmain에서 불러와야 한다.
//예: 
// exports.hello = function(){
//     return [
//     {id: 'a', name:'김소현'},
//     {id: 'a', name:'김소현'}
// ]
// }
    
exports.login = function(){
    return { id: "1", pw: "1234" }
}

var users = 
'스프렉틱스//1234//spreatics'
'codee//4321//코디';

exports.user2 = () => {
    return users;
}