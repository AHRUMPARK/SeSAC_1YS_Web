

// 자동차에 색과 문 속성
// 기능 움직인다, 멈춘다, 색반환
//constructor 생성자
class Car {
    constructor(color){
        this.color = color;
        this.isDoor = true;
    }
    move(){
        console.log('움직인다.');
    }
    stop(){
        console.log('멈춘다.');
    }
    returnColor(){
        return this.color;
    }
};
module.exports = { Car };
//car 객체를 감싸서 모듈로 내보냄