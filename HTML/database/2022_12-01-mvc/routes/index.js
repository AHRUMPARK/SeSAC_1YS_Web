var express = require('express');
var controller = require('../controller/Cmain');

//라우터 정의 재료 외우기 1
const router = express.Router();

//라우터에 대한 모든 것을 여기다 저장(정의)해 두겟다 외우기2
//router.get(post)
router.get('/', controller.main);
router.get('/test', controller.test);

router.post('/postForm', controller.post);

//어떤 파일에서 호출해서 쓰고 싶다면, require 모듈로써 불러와야한다 즉, export 어떤 것을 보낼지 정의 해야 한다.
//index.js 파일을 어디선가 불러 왔을 때 얘를 export하겠다 (우리 이파일 최상위 index.js파일에서 ./routes파일 속 이 파일을 부름)
//우리는 exports 로 정의한 router가 최상위 index.js파일에 담기는 것
module.exports = router;