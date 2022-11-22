
//함수를 실행하는 형태 (어떤걸 인자로 받아서)
//function func1(value, call){
//    console.log( value );
//    call();
//}
//펑션1이 끝나고 난다음에 실행을 한다.
//a라는 문자는 value라는 변수가 될거고 뒤는 call
//func1('a',function(){
//    console.log('1');
//});

//function func2(){
//    console.log('2');
//}
//func1(func2);

//로그인 작업이 2초동안 될 것 스타트 하고 로그인 함수 실행시키고 끝날때 결과 받아오고 아이디띠우고 피니쉬 띠우고
//문제가 없어보이지만, 실행을 해보면 문제가 있다
//타임 메소드는 전부다 비동기 ( 결과를 기다리지 않음)
//즉 아이디에는 아무리 리턴해봣자 들어가지 않는다?..
//리턴 없다고 쳐도 로그인이 성공햇을떄 x, 피니쉬여야하는데 피니쉬, x 순으로 나오게 된다.

//console.log('start');
//function login(id, cb){
//    setTimeout(() => {
//        console.log('x');
//        return id;
//    },2000);
//}

//const id = login('kim', null );
//console.log( id + '님 환영!');
//console.log('finish');


//콜백은 동기로 만들어주는 함수이다.
//비동기는 순서가 없기 때문에 우리가 직접 동기로 순서를 만들어 준다.
//로그인이 끝난 후! ~님 환영합니다가 뜬다.
console.log('start');
function login(id, cb){
    setTimeout(() => {
        console.log('로그인 성공');
        cb(id);
    },2000);
}

 login('kim', function(id){
    console.log( id + '님 환영합니다');
} );
console.log('finish');

cb = function(id){
    console.log( id + '님 환영합니다');
}

