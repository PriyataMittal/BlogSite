const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
const datapath=require("./database/data");
datapath();
app.use(express.json());
const router=require("./routes/user.js");
app.use("/",router);

const port=3000;
app.listen(port,()=>{
    console.log("server started");
})
