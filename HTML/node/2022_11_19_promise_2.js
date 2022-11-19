/*
new Promise(function(resolve, reject){
    //resulve : 함수형태, 성공했을 떄 실행할 친구
    //reject : 함수형태, 실패 or 에러를 처리할 때 사용하는 친구
});
*/
function func3(flag){
    return new Promise(function(resolve, reject){
        if( flag ) {
            resolve('flag는 true');
        } else {
            reject('flag는 false');
        }
    });
}
// func3(false).then(
//     function(msg) {
//         console.log('msg1 : ', msg);
//     },
//     function(msg){
//         console.log('msg2 : ', msg);
//     }
// );
//결과를 받으려면 then사용
//프로미스 객체도 뉴데이터처럼 객체를 받아와서 쓰고 성공, 실패 인자를 받는다.
//func3( 인자에 트루 펄스에 따라 값이 다름)
func3(false)
    .then(
         function(msg) {
            console.log('msg1 : ', msg);
    },
        function(msg){
        console.log('msg2 : ', msg);
    })
    .catch(function(msg){
        console.log('msg2 : ', msg);
    });
    //then에서 처리하지 않으면, catch에서 처리 할 수 있다.