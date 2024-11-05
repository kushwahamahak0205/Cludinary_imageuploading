const express = require("express");
const app= express();
const mongoose= require("mongoose");
var cors = require('cors');
const  bodyParser = require('body-parser')
const studentRouter= require("./routes/studentRoutes");
mongoose.connect("mongodb://127.0.0.1:27017/cloudimageupload")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())
app.use("/students", studentRouter);

app.listen(8000, ()=>{
    console.log("Server Run on 8000")
});