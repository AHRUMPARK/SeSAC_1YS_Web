const fs = require('fs');
fs.readFile('./test.txt', function(err, data){
    // if (err) throw err; // data 콘솔로그 안보임 , 그 즉시 멈춰서 안보임
    
    console.log('data :', data.toString()); //콘솔로그만 찍으면 err가 보이고 다음이 진행되어 보인다.
})

// 파일, 함수(에러,)
// 첫번째 자리는 에러먼저 받고, 데이터를 받는다.
// if (err) throw err; 에러를 떤지겟다. = 잘못된 에러처리(노드js는 스로시키면, 죽는다.)
// 파일이 정상적으로 있으면, 버퍼 형태로 읽어서 
// data : <Buffer 61 72 75 6d 20 34 35 32 33 20 39 30 38 31> 이런식으로 찍힌다.
// 자바스크립트에서 문자로 변형시켜서 읽어보자
//data.toString() or String(data)

//const fs2 = require('fs').promises; 라고 하면, 프로미스로 된 함수들을 쓸 수 있다.
// var result = fs.readFile('.TEST.TXT'); 기다리지 않으니까 언디파인드, 콜벡 이용해 파일 읽은 결과값 가져오거나 프로미스 이용해서 댄 으로 값을 가져오거나
const fs2 = require('fs').promises;
fs2.readFile('./test.txt')
    .then((data) =>{
        console.log('promise - data : ', data);
        //then에서 data 속에 들어온다. 파일처리가 대표적 비동기 동작이다.
    })


//만드는 함수  writeFile(파일명,내용) 
fs2.writeFile("./writeFile.txt", '사랑해요')
    .then(function(){
        return fs2.readFile('./writeFile.txt')
    })
    .then(function(data){
            console.log( data.toString());
        });
        //writeFile은 리졸브로 실행은 시키는데, 값을 가져오지 않는다.
        //then 체이닝은 문법상 같은 라인에서 해줘야 한다.



        // 위의것을 콜벡으로 변환해보겟다
fs.writeFile('./writeFile2.txt', 'codingon', function(err){
    if ( err ) throw err;
    console.log( 'writeFile sucess!');
    fs.readFile('./writeFile2.txt', function(err, data){
        if (err) throw err;
        console.log('wirte2File data : ', data.toString());
    }) 
});

//fs 는 콜벡, fs2는 프로미스 