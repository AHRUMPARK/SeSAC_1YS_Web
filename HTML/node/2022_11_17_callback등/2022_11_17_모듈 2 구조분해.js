//const num = require('./2022_11_17_모듈 1');
// {a: 1, b:3 }
//위의 것을 아래 구조 분해 사용 가능
const {a, b} = require('./2022_11_17_모듈 1');
const a = num.a;
const b = num.b;

function add(){
    return a + b;
}

module.exports = add;