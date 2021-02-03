const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/greet', (req, res) => {
  const {name = 'No-name'} = req.cookies;
  res.send(`Hey there, ${name}`)
})

app.get('/setname', (req, res) => {
  res.cookie('name', 'Stevie Chicks')
  res.send('Ok sent you a cookie!')
})

app.listen(3001, () => {
  console.log('Serving');
})