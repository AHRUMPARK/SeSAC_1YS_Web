const {Car} = require('./2022_11_17_class_car2');
console.log(Car);

//constructor new 생성자
//constructor(color) 기본값이 컬러를 받고 있음
var car1 = new Car('red');
console.log( car1.returnColor() );
var car1 = new Car('blue');
console.log( car1.returnColor() );
var car1 = new Car('yellow');
console.log( car1.returnColor() );