const jwt = require('jsonwebtoken');
const auth = require('../auth')

function userVerification(req, res,next){
    var token = req.headers['x-access-token'];
    if(!token){
        res.status(401).send({auth: false, message: "Provide Your Token"})
    } else {
        jwt.verify(token, auth.secret, function(err, decoded){
            if(err){
                return res.status(500).send({auth: false, message: 'Failed to authenticate user.'})
            } else{
                req.id = decoded.id;
                next()
            }
        })
    }
}




module.exports = userVerification;