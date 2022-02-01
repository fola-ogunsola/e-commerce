const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// const taskRouter = require('./routes/task');
const indexRouter = require('./app/routes/index')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('you just hit the home page\n')
})

// app.use('/api/user', userRouter);
app.use('/api', indexRouter);

app.listen(4500, () => {
    console.log('Listening on localhost:4500')
})

module.exports = app