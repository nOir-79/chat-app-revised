require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const authenticationRouter = require('./routes/authenticationRoutes')

const app = express()

mongoose.connect("mongodb://localhost:27017/ChatUser")

app.use(express.json())
app.use('/authentication',authenticationRouter)

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`The server is listening to the port ${port}`)
})