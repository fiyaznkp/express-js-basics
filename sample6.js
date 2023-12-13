const express = require("express")

const port = 5173

const app = express()

app.get("/",(req,res)=>{
    res.send("hello")
    
})

app.get("/home",(req,res)=>{
    res.send("home page")
})

app.get("/about",(req,res)=>{
    res.send("about")
})

app.post("/about",(req,res)=>{
    res.send("new page created")
})

app.put("/about",(req,res)=>{
  res.send("about page updated")
})

app.delete("/about",(req,res)=>{
    res.send('about page deleted')
})
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
