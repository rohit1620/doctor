const mongoose=require("mongoose");


const appoinSchema= new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
},
doctor:{
    type:String,
    required:true
},
apd:{
    type:String,
    required:true
},
apt:{
    type:String,
    required:true
},
problem:{
    type:String,
    required:true
},
})

const Appoin=mongoose.model("Appoin",appoinSchema);

module.exports=Appoin;