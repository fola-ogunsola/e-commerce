var express = require('express');
var router = express.Router();
var dashboard = require('../controllers/user');


router.get('/product', dashboard.getAllProduct)

router.get('/product/:id', dashboard.getOneProduct)




module.exports = router;