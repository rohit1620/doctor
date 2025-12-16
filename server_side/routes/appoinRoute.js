const express =require("express");
const {appoin} =require("../controllers/appoinController")
const router=express.Router();


router.route("/appoinment").post(appoin);


module.exports=router;