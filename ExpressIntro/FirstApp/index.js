const express = require('express');
const app = express()

// app.use((req, res) => {
//   console.log('We got a new request!')
//   // res.send('Hello, we got your request!');
//   res.send('<h1>This is my webpage!</h1>')
// })

app.get('/', (req, res) => {
  res.send('You made it to our home page. Congratulations!')
})

app.get('/r/:subreddit', (req, res) => {
  const {subreddit} = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
  const {subreddit, postId} = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
  res.send('Post Request to /cats!')
})

app.get('/cats', (req, res) => {
    res.send('Meow!!!')
})

app.get('/dogs', (req, res) => {
  res.send('Woof!!!')
})

app.get('/search', (req, res) => {
  const {q} = req.query;
  if(!q) {
    res.send('Nothing found if NOTHING SEARCHED!')
  }else{
    res.send(`<h1>Search Results for: ${q}</h1>`)
  }
})

app.get('*', (req, res) => {
  res.send('I do not know that path!')
})

app.listen(3000, () => {
  console.log('Listening on Port 3000!')
})