const express=require("express");
const user = require("../models/user");
const router=express.Router();
const multer = require('multer');
const image = multer({dest :'images/'}); // destination dedi
    const { register , login}=require("./../controller/user.js");
    const {createPost , getCurUserAllPost , deletePost, getAllPost, updateIsAuth, verified} = require("../controller/post.js");
router.post("/Register",register);
router.post("/Login",login);
router.post("/postBlog" ,image.single('image') , createPost); // eske andr image save ho rhi hai , kis name se aygi
router.get("/getCurUserAllPost/:id" , getCurUserAllPost);
router.delete("/deletePost/:id" , deletePost)
router.get("/getAllPost" , getAllPost);
router.put("/updateAuth/:id" , updateIsAuth);
router.get("/user/verify/:id",verified);

module.exports=router;