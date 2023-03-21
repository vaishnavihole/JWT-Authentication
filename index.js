import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json())

const PORT = 5000;
const SECRET_KEY = 'roadtocode4u'

app.post('/login', async (req, res) => {

    const {email} = req.body;
    const token = jwt.sign({email: email, isAdmin: true}, SECRET_KEY, {expiresIn: "1min"});

    res.json({
        success: true,
        data: {
            email: email,
            jwt_token: token
        },
        message: "Logged in  Successful"
    })
})

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`)
})

