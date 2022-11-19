// 파일경로
console.log( "__filename : " + __filename );
console.log( " __dirname : " + __dirname );

// process 객체 = 현재 실행 중인 노드 프로세스 정보
console.log("process.version : ", process.version );
console.log("process.arch : ", process.arch );
console.log("process.platform : ", process.platform );
console.log("process.cpuUsage : ", process.cpuUsage() );
console.log("----------------------------------------------")

//os 모듈 - 운영체제 얘는 내장모듈이라, require로 불러와야 한다.
const os = require("os");
console.log("os.type : ", os.type());
console.log("os.cpus : ", os.cpus());
console.log("os.homedir : ", os.homedir());
console.log("os.freemem : ", os.freemem());

//path 모듈
//폴더랑 파일 경로, 파일명을 구분을 지을 수 있다. ( 파일 이름만, 파일 확장자만 가져올 수 있다. )
//extname 확장자만 구분지어 가져오기
//parse 확장자 따로 루트경로 따로 등 구분지어 가져올수 있는 보여준다.
const path = require("path");
const file = __filename;
console.log("path.extname : ", path.extname(file) );
console.log( "path.parse : ", path.parse(file) );