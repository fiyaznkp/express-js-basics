const express = require("express")

const fs = require("fs")
const app = express()

const port =5173

app.get("/",(req,res)=>{
    fs.readFile("index.html","utf-8",(err,data)=>{
        if(err){
            console.log(err)
            res.status(500).send("Error reading file");
        }
        else{
           console.log("sucessfull")
           res.send(data)
        }
    })
  
})

app.get("/about",(req,res)=>{
    res.send("about page")
})
app.listen(port,()=>{
    console.log('server running')
})