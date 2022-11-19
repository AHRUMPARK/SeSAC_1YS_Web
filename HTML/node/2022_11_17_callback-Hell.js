
//각각 3,2,1 초 순서없으면 비동기 쓰면되지만, 얘는 순서가 필요하다

// function login(id, pw, cb) {
//     setTimeout(() => {
//         console.log('사용자 입장');
//         cb(id);
//     }, 3000);
// }
// function getVideo(id, cb){
//     setTimeout(function(){
//         console.log( id + "의 비디오 리스트 ");
//         cb( ['아바타', '라라랜드']);
//     }, 2000);
// }

// function getDetail(video, cb){
//     setTimeout(function(){
//         cb( '비디오 제목 : '+ video );
//     }, 1000);
// }

//동기식으로 순서를 만들어주기
// 셋타임아웃을 쓰지 않으면, 함수들이 비동기 일때 동기 코드처럼 사용하기위해 콜벡함수로 엮은 것이 위에 코드들
function login(id, pw, cb) {
    console.log('사용자 입장');
    return id;
}
function getVideo(id, cb){
    console.log( id + "의 비디오 리스트 ");
    return ['아바타','라라랜드']
}

function getDetail(video, cb){
        return ( '비디오 제목 : '+ video );
}

let user = login('kim', '1234');
console.log(user); //kim이라고 나온다.
let videos = getVideo(user);
console.log(videos);
let msg = getDetail(videos[0]);
console.log(msg);

