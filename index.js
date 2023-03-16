import express from "express";

const app = express();
app.use(express.json())

const PORT = 5000;

app.get('/users', (req, res)=>{
    res.json({
      success: true,
      data: "Users Data",
      message: "Users fetched successfully"
    })
  })
  

app.listen(PORT, ()=>{
    console.log(`Server started on Port ${PORT}`)
  })

  