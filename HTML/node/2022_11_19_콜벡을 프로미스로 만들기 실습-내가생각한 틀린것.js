//프로미스로 만들기
//.then을 세번 써야 할 것이다.

// function login(id, pw, cb) {
//     console.log("사용자 입장");
//     return id;
// }
// function getVideo(id, cb) {
//     console.log( id + "의 비디오 리스트");
//     return ['아바타', '라라랜드'];
// }
// function getDetail(video, cb) {
//     return "비디오 제목 : " + video;
// }
// let user = login('kim', '1234');
// let videos = getVideo(user);
// let msg = getDetail(videos[0]);
// console.log(msg);


function login(id, pw){
    return new Promise( function (resolve, reject){
        setTimeout( function (){
            console.log('사용자 입장');
            resolve(id);
        }, 3000);
    });
}

function getVideo(id, cb) {
    return new Promise (function(resolve, reject){
        setTimeout(function(){
            console.log( id + "의 비디오 리스트");
            resolve['아바타', '라라랜드'];
        }, 1000);
    });
    }

function getDetail(video, cb) {
        return "비디오 제목 : " + video;
    } 
    
let user = login('kim').then(function(user){
    console.log('아이디 : ',user);
    return user;
});

let videos = getVideo(user).then(function(videos){
    console.log[videos];
    return videos[0];
})
getDetail(videos);
