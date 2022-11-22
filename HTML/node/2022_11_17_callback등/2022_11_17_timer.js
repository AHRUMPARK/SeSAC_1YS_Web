// 익명함수로 1.5초 뒤 실행할 수 있도록 위를 만듬 , 재사용 할 필요가 없으니 공간없이 한다.
// 아래 두줄 코드와 같은 기능
// function a() { console.log("1.5초후 실행");}
// setTimeout( a, 1500 );
console.log(2)
const func1 = setTimeout(function(){
    console.log( "1.5초 후 실행 ");
}, 1500);
const func2 = setInterval(() =>{
    console.log( "1초 마다 반복 ");
}, 1000);
const func3 = setTimeout(() => {
    console.log( "func3 실행 ");
});
console.log(1)
setTimeout(() => {
    clearTimeout(func3);
    clearInterval(func2);

}, 2500);

console.log(1)

function a(){
    console.log(1)
    console.log(1)
    console.log(1)
}

const fun4 = setImmediate(() => {
    console.log("fun4 즉시 실행");
});
console.log(3)
const fun5 = setImmediate(() => {
    console.log("fun5 즉시 실행");
});
clearImmediate(fun5);