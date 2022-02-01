var express = require('express')
var multer  = require('multer')
var multerS3 = require('multer-s3')
var aws = require('aws-sdk')


var s3 = new aws.S3({
region: 'us-west-2',
accessKeyId: 'AKIAQQ7NRFJSMMR3IQNE',
secretAccessKey: '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',
signatureVersion: 'v4',
})

var storage = multerS3({
    s3: s3,
    bucket: 'photow-profile-images',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '_' + file.originalname)
    }
  })
  var upload = multer({ storage: storage })


module.exports = upload