const express = require("express")

const port = 5173

const app = express()

app.get("/",(req,res)=>{
    res.send("hello")
    
})

app.get("/home",(req,res)=>{
    res.send("home page")
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
