const user=require("./../models/user.js");
const bcrypt=require("bcrypt");
const verification =require("./verify.js")
require("dotenv").config();
exports.register=async(req,res)=>{
    try{
        const {name,email,password}=req.body 
        //console.log(name);
          // obj destructuring
          const existuser=await user.findOne({email});
          if(existuser){
            return res.status(400).json({                    //400 client side
                message:"user already exist"
            });
          }

          try{
            let hashpassword=await bcrypt.hash(password,10);
            let storeuser=new user({
                name,email,password:hashpassword

            })
            await storeuser.save();

          const message = `${process.env.BASE_URL}/user/verify/${storeuser._id}`;
          console.log("message " + `${process.env.BASE_URL}/user/verify/${storeuser._id} `);

          console.log(storeuser.email);
          await verification(storeuser.email, "Verify Email",message);

          //
            return res.status(200).json({
              storeuser
            })                   // 200 successfull

          }
          catch(err){
            console.log("error in hashing password");

          }
          
    }
    catch(err){
        console.log("user unable to register");
    }
}



exports.login=async(req,res)=>{
    try{
        const useremail=req.body.email;
        const userpassword=req.body.password;
        let existuser=await user.findOne({email:useremail})
        
        if(existuser==false){
        return  res.send("user does not exist");

        }
        let flag=await bcrypt.compare(userpassword,existuser.password);
        if(flag==false){
          console.log("wrong password");
          return res.status(400);
        }
        return res.status(200).json({
          existuser
        })   
    }
    catch(err){
      console.log("please register");
        

    }
}