const express = require('express')
const env = require("dotenv")

env.config()
const app = express()
const APP_ENV = process.env.APP_ENV

app.all('/', (req, res) => {
    console.log(APP_ENV + " : Just got a request!")
    res.send(APP_ENV + " : Express app template!")
})
app.listen(process.env.PORT || 5000)
