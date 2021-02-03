const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
  const {name = 'No-name'} = req.cookies;
  res.send(`Hey there, ${name}`)
})

app.get('/setname', (req, res) => {
  res.cookie('name', 'Stevie Chicks')
  res.send('Ok sent you a cookie!')
})

app.get('/getsignedcookie', (req, res) => {
  res.cookie('fruit', 'grape', { signed: true});
  res.send('Okay! Signed your fruit cookie!')
})

app.get('/verifyfruit', (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send(req.signedCookies);
})

app.listen(3001, () => {
  console.log('Serving');
})