const mongoose=require("mongoose");
const bcrypt=require("bcrypt")

const userSchema= new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}
})

userSchema.pre("save",async function(){
    const user=this;
    if(!user.isModified("password")){
        return next()
    }
    try {
        const salt=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hash(user.password,salt)
        user.password=hashPassword;
    } catch (error) {
        next()
    }
})

const User=mongoose.model("User",userSchema);

module.exports=User;