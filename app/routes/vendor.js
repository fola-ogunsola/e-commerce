var express = require('express');
var router = express.Router();
var vendor = require('../controllers/vendor');
const upload = require('../utils/upload')


// function singleUploadFileHandler (req, res, next) {
//     console.log('mama')
//     if(process.env.NODE_ENV == 'test') {
//       console.log('here2')
//       next();
//     }
//     else {
//       upload.single('image')
//     }
//   }
router.post('/product', vendor.createProduct)



router.put('/product/:id', vendor.updateProduct)


router.delete('/product/:id', vendor.deleteProduct)

module.exports = router;