const express = require('express');
const bodyParser = require('body-parser');
const app = express();



// const taskRouter = require('./routes/task');
const indexRouter = require('./app/routes/index')
const vendorRoute = require('./app/routes/vendor')
const userRoute = require('./app/routes/user')
 const stripeRoute = require('./app/routes/stripe')
const stripe = require('stripe');
const endpointSecret = "whsec_7b9000d645673a83c03320be176809e1c1a3d6c141643ae34bab9d0912e0ef60";

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


app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'charge.failed':
      const charge = event.data.object;
      // Then define and call a function to handle the event charge.failed
      break;
    case 'charge.succeeded':
      // const charge = event.data.object;
      // Then define and call a function to handle the event charge.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send({statu: 'success', message: "message sent successful"});
});

app.listen(4500, () => {
    console.log('Listening on localhost:4500')
})

module.exports = app