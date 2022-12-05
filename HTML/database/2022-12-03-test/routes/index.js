var express = require('express');
var controller = require('../controller/Clogin');
const router = express.Router();

//라우터에 대한 모든 것을 여기다 저장(정의)해 두겟다 외우기2
//컨트롤러에 visitor라는 함수 만듬
router.get('/', controller.main);
router.post('/register', controller.register);

router.get('/login', controller.login);
router.post('/login', controller.post_login);

router.post('/profile', controller.profile);
router.patch('/profile/edit',controller.profile_edit);
router.delete('/profile/delete', controller.profile_delete);



module.exports = router;