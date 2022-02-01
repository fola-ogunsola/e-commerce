const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// const taskRouter = require('./routes/task');
const indexRouter = require('./app/routes/index')
const vendorRoute = require('./app/routes/vendor')
const userRoute = require('./app/routes/user')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('you just hit the home page\n')
})

// app.use('/api/user', userRouter);
app.use('/api', indexRouter);


app.use('/api/vendor', vendorRoute);

app.use('/api/user', userRoute);

app.listen(4500, () => {
    console.log('Listening on localhost:4500')
})

module.exports = app