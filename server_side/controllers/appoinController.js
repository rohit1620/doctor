const Appoin = require("../models/appoinSchema")

const appoin=async(req,res)=>{
    try {
        const {name,email,phone,doctor,apd,apt,problem}=req.body;
        await Appoin.create({name,email,phone,doctor,apd,apt,problem})
        res.status(200).json({"msg":"Appoin added successfully"})
    } catch (error) {
        res.status(400).json({"msg":error})
    }
}

module.exports={appoin};