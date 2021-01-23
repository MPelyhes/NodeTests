const path = require('path');
const methodOverride = require('method-override');
const {v4: uuid} = require('uuid'); // For generating unique ID's
const express = require('express');
const app = express();

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let userPosts = [
  {
    id: uuid(),
    bookTitle: 'Moby Dick',
    bookSum:  'Ishmael goes on a whaling vessel captained by Ahab. Ahab hates a white whale named Moby, and makes it his life goal to kill the great white whale. There is a lot of symbolism in this book'
  },
  {
    id: uuid(),
    bookTitle: 'Slaughterhouse Five',
    bookSum: 'Dark comedy and WWII flashbacks abound in this classic.'
  },
]
//**************************************************
// INDEX - Renders multiple posts
//**************************************************

app.get('/posts', (req, res) => {
  res.render('posts/index', { userPosts});
})
//***************************************************
// NEW - Renders a new form
//***************************************************
app.get('/posts/new', (req, res) =>{
  res.render('posts/new');
})



app.listen(3000, () => {
  console.log("ON PORT 3000!")
})
