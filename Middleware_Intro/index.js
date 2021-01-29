const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'))

const verifyPassword = ((req, res, next) => {
  const { password } = req.query;
  if(password === 'chickennugget') {
    next();
  }
  res.send('Sorry, you need a password to get in here...')
});

app.use((req, res, next) => {
  console.log(req.method.toUpperCase())
  next()
})

app.use('/dogs', (req, res, next) => {
  console.log("I love Dogs!");
  next();
})

app.get('/', (req, res) => {
  res.send('Home Page!')
})

app.get('/dogs', (req, res) => {
  res.send('Woof Woof!')
})

app.get('/secret', verifyPassword, (req, res) => {
  res.send('Sometimes I am too tired to thinkkkk')
})

app.use((req, res) => {
  res.status(404).send('Not Found!')
})

app.listen(3000, () => {
  console.log('App is running on localhost:3000')
})