
const dotenv = require('dotenv');
console.log( process.env.PORT );// 이환경 변수에 port라는 얘가 담김
dotenv.config(); //.env파일을 찾는다. 
dotenv.config({ path : './coomo.env'}); // 경로
dotenv.config({ path : path.join(__dirname,'./coomo.env')}); 


//Figma
//Postman 설치를 하면, 