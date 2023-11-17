const express = require("express")

const app = express()

const path = require("path")
const port = 5173

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"about.html"))
})
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"contact.html"))
})

app.listen(port,()=>{
    console.log(`server running on port:${port}`)
})