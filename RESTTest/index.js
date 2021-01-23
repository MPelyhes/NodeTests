const path = require('path');
const methodOverride = require('method-override');
const {v4: uuid} = require('uuid'); // For generating unique ID's
const express = require('express');
const app = express();

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())
// To 'fake' put/patch/delete requests:
app.use(methodOverride('_method'))
// Views folder and EJS setup:
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
  res.render('posts/index', { userPosts });
})
//***************************************************
// NEW - Renders a new form
//***************************************************
app.get('/posts/new', (req, res) =>{
  res.render('posts/new');
})
// **************************************************
// CREATE - Creates a new post
// **************************************************
app.post('/posts', (req, res) => {
  const { bookTitle, bookSum} = req.body;
  userPosts.push({bookTitle, bookSum, id: uuid()})
  console.log(userPosts);
  res.redirect('/posts');
})
// ***************************************************
// SHOW - Details about one particular post
// ***************************************************
app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  const posts = userPosts.find(post => post.id === id) ;
  res.render('posts/show', { posts })
})
// ***************************************************
// EDIT - Renders a form to edit a comment
// ***************************************************
app.get('/posts/:id/edit', (req, res) => {
  const { id } = req.params;
  const posts = userPosts.find(post => post.id === id) ;
  res.render('posts/edit', { posts })
})
// ***************************************************
// UPDATE - Updates a particular comment
// ***************************************************

//****************************************************
// DELETE/DESTROY - Remoces a single post
// ***************************************************
app.delete('/posts/id:', (req, res) => {
  const { id } = req.params;
  posts = userPosts.filter(post => post.id !== id);
  res.redirect('/comments')
})




app.listen(3000, () => {
  console.log("ON PORT 3000!")
})
 