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
            resolve(['아바타', '라라랜드']);
        }, 1000);
    });
    }

function getDetail(video, cb) {
    return new Promise (function(resolve, reject){
        setTimeout(function(){
        resolve( "비디오 제목 : " + video);
    },1000);
});
}
    
login('kim')
    .then(function(user){
     console.log('아이디 : ',user);
     return getVideo(user); //프로미스를 받고 프로미스가 2초동안 작동 프로미스 팬딩상태로 리턴?
    })//getvideod에서 resolve가 실행될 때까지 다음 댄이 기다립니다.

    .then(function(videos){ //리스트가 비디오스로 들어온다.(resolve값이 then 함수의 첫번쨰 파라미터로 들어온다.)
        console.log( "videos : " + videos );
        return getDetail(videos[0]);
    }) //1초 있다가 받와야하니, than이 필요하다.
    .then( function(msg){
        console.log('msg : ', msg);
    });

//login('kim','1234').then(getVideo)//getvideo함수가 바로 실행됨
/*
function login(id, pw) {
    return new Promise( function ( resolve, reject ) {
        setTimeout( function() {
            console.log( "사용자 입장" );
            resolve(id);
        }, 3000);
    })
}

function getVideo(id) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log( id + "의 비디오 리스트");
            resolve( ['아바타', '라라랜드']);
        }, 2000);
    });
}
function getDetail(video) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve("비디오 제목 : " + video);
        }, 1000);
    });
}

login( 'kim', '1234' )
    .then( function(user){
        return getVideo(user);
    })
    .then( function(videos){
        console.log( "videos : ", videos );
        return getDetail(videos[0]);
    })
    .then( function(msg){
        console.log( "msg : ", msg );
    });
    */