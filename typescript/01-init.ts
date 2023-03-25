// 변수 
// 키워드 변수이름: 타입 = 값;
// 타입표기 ( type annotation )
const str: string = '1';
const num: number = 1 ;
const bool: boolean = true ;

// object
const arr1: number[] = [1,2,3];
const arr2: string[] = ['a', 'w', 'e'];
const arr3: Array<number> = [1, 2, 3];
// console.log( arr2[0].concat('!'));

// tuple => 처음 정의했을때 고정이되서 바꿀 수 없는 것 (db에서는 행이다.)
const arr4: [boolean, string] = [true, 'a']; // 

// enum 열거형 (특정 값을 열거)
enum Names { sesac, 새싹 } // 열거형을 타입으로 지정하면, Names에 정의해 넣어 있는것만 사용 가능
let name1: Names = Names.sesac ; 

// any : 최대한 안 쓰는게 좋다. js로 구현해놓은것을 ts로 바꿀때 쓴다.
// 모든 타입에 대해서 허용한다.
const any1: any = [1,2,3];

// void : undefinde 와 null 만 들어갈 수 있는 타입
const var1: void = undefined;
// 함수에서 리턴을 하지 않으면 void 지정

// never => 절대 끝에 도달하지 않는 친구에게 부여
function neverEnd(): never {
    while(true){ // 영원히 반복하는..
    }
}

//===================================================== 함수
// ( 매개변수 : type ) : <return> 
// function 함수이름 ( 매개변수 : type ) : 반환타입 {}

function sum1(a: number, b: number): number {
  return a + b;
}
console.log(sum1(1, 2)); // 타입을 지정한만큼 지켜야한다.

// a는 무조건 받지만, b는 선택적이게 받고싶을때 ? 물음표 사용
// 매개변수에 값 넣을 수 있다. a: number = 1
function sum2(a: number = 1, b?: number): number {
  if ( b == undefined )
  return a;
  else return a + b; // number + number // number + undefined 여서 err
  // console.log(a);
  // console.log(b);
}

sum2(1);
sum2(1, 2);



//===================================================== interface
// interface
// 미리 정해놓은 약속 혹은 규칙
interface Student {
  // Student 라는 타입을 정의 한다고 생각
  name : string;
  age: number;
  nickname?: string;
}

const student1: Student = {
  name: '이름1',
  age: 10
}

const student2: Student = {
  name: '이름2',
  age: 20,
  nickname: '닉네임2',
}

// 함수도 가능
function check( stu : Student ){
  console.log( stu.name )
}
check(student1);
check(student2);


//===================================================== class
// class 클래스이름 {
//   변수명 : 타입;
//   constructor(변수: 타입){
//     this.변수명 = 변수
//   }
// }

class Person {
  id: string;
  constructor(name: string, age: number){
    this.id = name + age;
  }
}
const person1 = new Person('이름3', 30);
console.log( person1.id );

// implements
interface Shape {
  width: number;
  getLength(): number; // getLength()는 number을 리턴
}

// interface 함수 도 정의 가능
class Square implements Shape {
  constructor(readonly width: number) {} //readonly width 변수 자동으로 전역변수 넣고, this.width = width; 줄임말입니다.

  getLength(): number {
    return this.width;
  }
}

const square1 = new Square(10);
console.log(square1.getLength());

class Person2 {
  constructor(public name: string, private age: number){
    this.name = name;
    this.age = age;
  }
}
const person3 = new Person2('a', 1);
console.log(person3.name); 
// console.log(person3.age); //private 여서 볼 수 없다.


// 제네릭  (Generic) <T>
// => 매개변수 처럼 사용 / 재사용성 높은 컴포넌트를 만들 때 사용합니다. / 한가지가 아닌 여러 타입에서 동작할때 쓰인다
function getText<T>(text: T) :T{
  return text;
}
// 넣는 변수와 리턴 값 타입이 같으면 좋겟다.
console.log(getText<string>('a')); // T => string 문자열 리턴
console.log(getText<number>(1)); // T => nubmer
