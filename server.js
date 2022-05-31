const express=require('express');
const { func } = require('./scrapit');
 
const app=express()

app.get("/",async (req,res)=>{
    const prices=await func();
 res.send({prices})
}
);
app.listen(3000,()=>{
    console.log("server is running");
})