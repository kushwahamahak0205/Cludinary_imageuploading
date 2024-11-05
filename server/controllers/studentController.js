const StuModel = require("../models/studentModel");
const dataSave=async(req, res)=>{
    const {rollno, name, city, contact, image}= req.body;
    const Student=await  StuModel.create({
        rollno: rollno,
        name: name,
        city: city,
        contact: contact,
        stuimage: image
    })   
    res.status(200).send({Student});
}
const dataDisplay=async(req, res)=>{
    const StuData= await StuModel.find();
    res.status(200).send(StuData);
}
module.exports={
    dataSave,
    dataDisplay
}