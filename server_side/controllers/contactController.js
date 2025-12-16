const Contact = require("../models/contactSchema")

const contact=async(req,res)=>{
    try {
        const {name,email,subject,msg}=req.body;
        await Contact.create({name,email,subject,msg})
        res.status(200).json({"msg":"contact added successfully"})
    } catch (error) {
        res.status(400).json({"msg":error})
    }
}

module.exports={contact};