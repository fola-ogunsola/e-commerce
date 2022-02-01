var express = require('express');
var router = express.Router();
var user = require('../controllers/index');



router.post('/register', user.createUser)

router.post('/confirm/:confirmation_code', user.verifyUser)


router.post('/login', user.userLogin)


module.exports = router;