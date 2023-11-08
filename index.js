const express = require('express')
const env = require("dotenv")
const db = require("./config/db")
const userRouter = require("./router/UserRouter")
env.config()
const APP_ENV = process.env.APP_ENV

db.connect()

const app = express()
app.use(express.json());

app.all('/', (req, res) => {
    console.log(APP_ENV + " : Just got a request!")
    res.send(APP_ENV + " : Express app template!")
})

app.use("/api/user", userRouter);

app.listen(process.env.PORT || 5000)
