const mongoose=require("mongoose");

const URL=process.env.URL;


const connectDB=async()=>{
    try {
        await mongoose.connect(URL)
        console.log("mongodb connected")
        
    } catch (error) {
        console.log("internal error",error)
    }
}

module.exports=connectDB;