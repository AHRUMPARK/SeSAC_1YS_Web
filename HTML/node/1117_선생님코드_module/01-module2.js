// {a: 1, b:3}
const { a, b } = require('./01-module.js');


function add(){
    return a + b;
}

module.exports = add;
// module.exports = { add };
// result = { add : function(){return a + b } }
// result.add();