const nodemailer = require("nodemailer");
const config = require("../auth");

const user = config.user;
const pass = config.pass;


const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

function sendEmailConfirmation(first_name, email, confirmation_code){
    transport.sendMail({
        from: user,
        to: email,
        subject: `Hi ${first_name} Please confirm your email`,
        text: `Thank you for subscribing. Your OTP is : ${confirmation_code}`
    }).catch(function(err){
        console.log(err)
    })
}


module.exports = {sendEmailConfirmation}