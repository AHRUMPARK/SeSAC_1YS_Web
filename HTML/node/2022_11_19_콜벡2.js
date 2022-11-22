function func1 (callback){
 console.log("func1");
 console.log(callback);
 callback('이름'); //결과적으로 실행되고 있는 부분에 값을 보내줘야 한다.
}
function func2 (name){
    console.log("func2");
    console.log("name : ", name);
}
func1(func2);
console.log('------------------------------------');
//위아래는 같다 밖에서 불러왔냐, 바로 썻냐 차이다 16번째줄 참고 a따로 뺏냐, 바로 보냇냐
func1(function(name){
    console.log('func2');
    console.log("name : ", name);
})
// 순서 지정 위해, 함수를 함수에게 보낸다.
//함수한테 함수를 파라미터로//
// 1을 실행할때 2에게 보낼거다
//var a = 1;
//Test(a);
//Test(1);
