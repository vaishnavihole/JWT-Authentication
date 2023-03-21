import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json())

const PORT = 5000;

app.post('/login', async (req, res) => {


    res.json({
        success: true,
        data: {
            email: "xyz@1gmail.com"
        },
        message: "Logged in  Successful"
    })
})

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`)
})

