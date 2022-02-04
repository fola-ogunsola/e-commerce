const express = require('express');
const bodyParser = require('body-parser');
const app = express();



// const taskRouter = require('./routes/task');
const indexRouter = require('./app/routes/index')
const vendorRoute = require('./app/routes/vendor')
const userRoute = require('./app/routes/user')
const stripeRoute = require('./app/routes/stripe')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('you just hit the home page\n')
})

// app.use('/api/user', userRouter);
app.use('/api', indexRouter);


app.use('/api/vendor', vendorRoute);

app.use('/api/user', userRoute);
app.use('/api', stripeRoute);




// app.post("/pay", function(req, res) {
 
//     let amount = 100*100;
     
//     // create a customer
//     stripe.customers.create({
//     email: req.body.stripeEmail, // customer email
//     source: req.body.stripeToken // token for the card
//     })
//     .then(customer =>
//     stripe.charges.create({ // charge the customer
//     amount,
//     description: "Sample Charge",
//     currency: "usd",
//     customer: customer.id
//     }))
//     .then(charge => res.json({message: "successful"})); // render the payment successful alter page after payment
     
//     });

app.listen(4500, () => {
    console.log('Listening on localhost:4500')
})

module.exports = app