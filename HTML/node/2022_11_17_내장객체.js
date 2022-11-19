console.log( global );
console.log( global.console );

// console 내장객체
// .error 에러들만 내보낼 수 있다.
let obj = {
    out: {
        in: {
            key: 'value'
        }
    }
};

//time 부터 timeEnd에 들어가는 글자 "시간"은 같아야 함
// 시간으로 시작하면, 시간으로 끝날 때까지의 초를 세는 것
//table 콘솔을 표형태로 보여줌 (우리가 배열로 보내면, 표로 보여준다.)
//dir 객체 구조(단계)를 보여줌 obj라는 객체 구조를 보여줄 건데 + 이어서
//colors라는 얘를 트루로 보여주면 다른 색으로 보임, depth 단계별로 보여준다 2단계면, key까지 보여준다.

console.log(obj);
console.log(obj['out']);
console.time("시간");
console.timeEnd("시간");
console.table([{name:'abc'},{name:'def'}]);
console.dir(obj, {colors: true, depth:1});
console.dir(obj, {colors: true, depth:2});



