import express from "express";

const app = express();
app.use(express.json())

const PORT = 5000;

const posts = [
    {
        username: 'kyle',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        title: 'Post 2'
    },
]

app.listen(PORT, ()=>{
    console.log(`Server started on Port ${PORT}`)
  })

  