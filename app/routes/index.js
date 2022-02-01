var express = require('express');
var router = express.Router();
var user = require('../controllers/index');


router.post('/register', user.createUser),

router.post('/confirm/:confirmation_code', user.verifyUser),

router.post('/login', user.userLogin),



router.post('/admin/register', user.createAdmin),

router.post('/confirm/:confirmation_code', user.verifyAdmin),

router.post('/admin/login', user.adminLogin),



module.exports = router;