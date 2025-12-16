const User=require("../models/userSchema")
const bcrypt=require("bcrypt")

const home=async(req,res)=>{
    try {
        res.status(200).json({
            "msg":"home page"
        })
    } catch (error) {
        console.log(error)
    }
}


const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        // console.log("req.bocy",req.body)
        const emailExist= await User.findOne({email});
        if(emailExist){
            return res.status(400).json({"msg":"Email Already Exist"});
        }
        await User.create({name,email,password})
        res.status(200).json({
        "msg":"register successfully"
        })
    } catch (error) {
        res.status(400).json({"msg":`internal server error:${error}`})
    }
}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const userExist=await User.findOne({email});
        if(!userExist){
          return res.status(400).json({"msg":"Invailid crediential"})
        }
        const compairPass=await  bcrypt.compare(password,userExist.password)
        if(!compairPass){
            return res.status(400).json({"msg":"wrong email or password"})
        }
       res.status(200).json({
        "msg":"login page",
        "vikash":true
        })  
    } catch (error) {
         res.status(400).json({"msg":`internal server error:${error}`})
    }
}

module.exports={register,login,home};
