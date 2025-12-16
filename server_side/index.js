require("dotenv").config();
const express=require("express");
const cors=require("cors");
const userRouter=require("./routes/userRoute")
const appoinRouter=require("./routes/appoinRoute");
const contactRouter=require("./routes/contactRoute")
const connectDB =require("./database/db") 

const app=express();
app.use(cors())
app.use(express.json())
app.use("/api",userRouter)
app.use("/api",appoinRouter)
app.use("/api",contactRouter)

app.get("/",(req,res)=>{
    res.status(200).json({"msg":"api chal rhi hai ab app url ke age /api/register ya /api/login lagakar chalaho"})
})
const port=process.env.PORT;

connectDB().then(()=>{
app.listen(port,()=>{
    console.log(`server running port on ${port}`)
})
})
