import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})

import connectDB from "./db/index.js";
import { app } from "./app.js";
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
      console.log(`Master is listening at port ${process.env.PORT }`);
      

    })
})
.catch((err)=>{
    console.log("MONGO db connection faild !!!");
    
})








/*
import express from"express";
const app=express();
(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME} `);
       app.on("error",(error)=>{
        console.log("ERRR:",error);
        throw error;
       })

       app.listen(process.env.PORT,()=>{
        console.log(`Master is listening on port ${process.env.PORT}`);
       })
    }catch(err){
        console.error("ERROR : ",error)
        throw err
    }
})()
 */