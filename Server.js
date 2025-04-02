const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const {Db} = require('mongodb')
const {connected} = require('process')
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/Trendique',{useNewUrlParser:true , useUnifiedTopology:true})

const authrouter = require("./Route/userroute");

const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('database is connected')
})

const app=express()
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})

app.use("/", authrouter);


