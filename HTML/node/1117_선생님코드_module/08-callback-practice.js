/** function call(name) {
    console.log("사용자는 " + name);
    return "call";
}
function back() {
    return "back";
}
function hell() {
    return "hell";
}

let a = call('kim');
console.log( "시작은 " + a);
let b = back();
console.log( "두번째는 " + b );
let c = hell();
console.log( "세번째는 " + c);






function func1(cb){
    console.log("func1");
    cb();
}
function func2(cb){
    console.log("func2");
    cb();
}
function func3(cb){
    console.log("func3");
    cb();
}

func1()

func3()


func1(function(){
    func2(function(){
        func3(function(){
            console.log("finish");
        })
    })
})
 */

console.log( "사용자는 kim")
setTimeout(call,2000);

function call(){
    console.log( "시작은 call");
    setTimeout(back,);
}


