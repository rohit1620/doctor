const express =require("express");
const {contact} =require("../controllers/contactController")
const router=express.Router();


router.route("/contact").post(contact);


module.exports=router;