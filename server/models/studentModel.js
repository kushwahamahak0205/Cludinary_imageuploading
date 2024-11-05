
const mongoose= require("mongoose");

const userSchema= new  mongoose.Schema({
       rollno: Number,
       name: String,
       city:String,
       contact:String,
       stuimage:String
})

module.exports= mongoose.model("student", userSchema);