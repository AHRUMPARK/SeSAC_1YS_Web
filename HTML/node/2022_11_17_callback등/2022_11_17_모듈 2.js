const num = require('./2022_11_17_모듈 1');
const a = num.a;
const b = num.b;


function add(){
    return a + b;
}

module.exports = add;