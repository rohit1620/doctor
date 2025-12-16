const express =require("express");
const {register,login,home} =require("../controllers/userController")
const router=express.Router();

router.route("/").get(home)
router.route("/register").post(register);
router.route("/login").post(login);

module.exports=router;