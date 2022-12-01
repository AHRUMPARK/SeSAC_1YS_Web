var express = require('express');
var controller = require('../controller/Cmain');

//라우터 정의 재료 외우기 1
const router = express.Router();

//라우터에 대한 모든 것을 여기다 저장(정의)해 두겟다 외우기2
//router.get(post)
router.get('/', controller.main);
router.post('/login', controller.login);
router.post('/login2', controller.login2);


module.exports = router;