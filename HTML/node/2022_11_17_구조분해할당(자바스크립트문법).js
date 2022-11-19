let list = ['apple', 'banana'];
[item1, item2] = list;
// let item; = list[0];
// let item; = list[1];
// let item; = list[2];
//라고 쳐야 할 것을 저렇게 배열을 해체해서 각각의 개별 변수에 담는다.


// 2의 값이 없으면 피치로해라 (있으니까 바나나로 온다) 3은 존재하지 않아서 기본값인 오렌지가 들어온다
// 구조분해를 하면서 이값이 없을때 대체를 할 수 있다.
[item1, item2 = 'peach', item3='orange'] = list;
console.log( item1 );
console.log( item2 );
console.log( item3 );

//[배열 구조 분해]
let x = 1;
let y = 3;

let temp = x;
x = y;
y = temp;

[y,x] = [x,y]
//x,y를 배열로 만들고 그것을 구조 분해 하고, 값을 바꿔준다.
//[1 , 3]
//[a, b] = [ 1, 3]  위를 구조 분해
//(배열은 순서대로 인덱스기 때문에!)


//객체 구조 분해
let obj = {
    a: 'one',
    e: 'ee',
    f: 'ff',
    
};
// let a = obj.a;
// 객체에서 a라는 키를 a라는 곳에 one이라는 변수?
//객체 구조분해는 이름으로(키값을) 찾습니다. = 순서가 상관없다 
//let { a, b } = obj;
//위의것의 이름을 바꾸는 방법
//변수의 이름을 바꿀 때 클론 앞의거 아님 뒤
let { b : key1, a, c = 'three' } = obj;
console.log( a );
console.log( key1 );
console.log( c );
//apple banana orange one two three


//전개연산자
// 나머지 얘들을 다 가져옴 (배열, 객체를 전개해서 가져옴)
// 가장 마지막에 들어가야한다, 추출이 되고 나머지들을 가져오기 때문에?
//... 변수명 쓰면 나머지 친구들이 온다
let { b, ...rest } = obj;
console.log(b);
console.log(rest);
//{ a: 'one', e: 'ee', f: 'ff' }