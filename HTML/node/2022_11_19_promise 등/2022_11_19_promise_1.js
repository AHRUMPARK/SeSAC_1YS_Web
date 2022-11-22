// new Promise ( function ( resolve, reject ){ });
//함수의 return은 값을 받을 수 있다.
function func1( ){
    return new Promise (function(resolve, reject){
        resolve('성&&공');
    });
}
function func2(){
    return new Promise (function(resolve, reject){
        setTimeout(function(){
            resolve('성_공');}, 1000);
    });
}

func1().then(function(result){
    console.log('result1 : ', result);
});
func2()
.then(function(result){
    console.log('result2 : ', result);
    return 'a'; 
}).then(function(abc){
    console.log('abc : ', abc);
}); 
//함수1을 리턴하면 .then이라는 친구로 값을 받겠다.
//then은 promise를 벗기고 팬딩 벗기고 resolve에 들어온 내용이 온다.
//func2 팬딩을 then이 기다렷다가 그 resolve 내용을 첫번째 인자로 받아옴 - 1초 성공을 가져온다.
//then 안에 return 시키면, 다음 then이 받는다. = 체이닝
