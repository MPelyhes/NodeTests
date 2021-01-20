const express = require('express');
const app = express()

app.use(() => {
  console.log('We got a new request!')
})

app.listen(3000, () => {
  console.log('Listening on Port 3000!')
})