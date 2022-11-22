const os = require('os');
console.log('os.freemem : ', os.freemem() );
console.log('os.totalmem : ', os.totalmem() );
console.log('os.homedir : ', os.homedir() );



const path = require('path');
const file = __filename;
//1.  __filename  => 현재 파일 경로.확장자
console.log('path.sep OS에따른 경로 구분자 : ',path.sep);
console.log('path.extname : ', path.extname(file));
console.log('path.dir : ', path.dirname(__filename));
console.log(os)
// cd 띄고 파일명 치고 앤터