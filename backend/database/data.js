const mongoose=require("mongoose");

function Connect(){
    mongoose.connect("mongodb://127.0.0.1:27017/blogdatabse").then(()=>{
        console.log("succdessfully connected");
    }).catch((err)=>{
        console.log("error found");

    });

}
module.exports=Connect;