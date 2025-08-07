//http-manuaaly kam jada krna pdta h 
//isilie express is introduced

//express is a framework for node js
//express is externally downloaded but not http

``
//packgae-lock.json(can be deleted)--detailes information about project
//node_modules --(can be deleted)--is the original code of all things
//package.json-basic and imp information about project


const express=require("express");
const app=express(); //instance of our project
app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.get('/home',(req,res)=>{
    res.send("i am in home ");
})



const port=8080;
app.listen(port , ()=>{
    console.log(`server connected at ${port}`);
})

//httpps method---get.post,put,oatch,delete
//patch-partial modification
//put-full modification


//"/"-root route/path -- by default (likho na likho koi frq ni h)

