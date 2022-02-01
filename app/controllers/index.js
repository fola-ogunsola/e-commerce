const bcrypt = require('bcryptjs');
const db = require('../../config/database');
const jwt = require('jsonwebtoken');
const auth = require('../../auth')
const queries = require('../queries/index')
const nodemailer = require('../../config/nodemailer')

function createUser(req,res){
    var digits = '0123456789';
    let OTP = '';
    for(let i=0; i < 4; i++){
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var phone_number = req.body.phone_number;
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var confirmation_code = OTP;
    const value = [first_name, last_name, email, phone_number, hash, confirmation_code]
    db.any(queries.createUser, value)
    .then(function(data){
        nodemailer.sendEmailConfirmation(
            first_name,
            email,
            confirmation_code
        )
        // let code;
        // if (process.env.NODE_ENV == "test") {
        //     code = confirmation_code;
        // }
        return res.status(200).json({status: "success", message: "A message has been sent to your email, Please confirm "})
    })
    // .catch(function(err){
    //     return res.status(400).json({status: "failed", message: "Something went wrong", err},
    //     console.log(err))
        
    // })
}


function verifyUser(req, res){
    const value = [req.params.confirmation_code, req.body.email]
    console.log(req.params.confirmation_code)
    db.oneOrNone(queries.verifyUser, value)
    .then(function(user){
        if(!user){
            return res.status(404).send({message: "User Not found."})
        }
        else {
            return res.json({status: "sucess", message:"Account Confirmed Successfully"})
        }
    })
    .catch(function(err){
        return res.json({status: "failed", message: "Something went wrong"})
    })
}


function userLogin( req,res){
    var email = req.body.email;
    var password = req.body.password
    db.oneOrNone(queries.loginUser, [email])
    .then(function(result){
        bcrypt.compare(password, result.password)
        .then(function(data){
            if(!data){
                return res.json({status: 'false', message: 'Email and password does not match'})
            }else{
                var token = jwt.sign({email: data.email}, auth.secret,{
                    expiresIn: 86400
                })
                res.json({message: 'Welcome', token:token})
            }
        })
    })
    .catch(function(err){
        return res.json({
            status:false,
            message:"Server Error",
            err
        })
    })
}


module.exports = {createUser, verifyUser, userLogin}