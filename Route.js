const express = require("express")

const app = express()

const port = 3000

app.get("/",(req,res)=>{
    res.send("welcome to home page")
})
app.get("/about",(req,res)=>{
    res.send('welcome to about page')
})

app.post("/about",(req,res)=>{
    res.send("new page created")
})


app.get("/contact",(req,res)=>{
    res.send("welcome to contact page")
})

app.put("/contact",(req,res)=>{
    res.send("contact page updated")
})

app.delete("/contact",(req,res)=>{
   res.send("contact page deleted")
})
app.listen(port,()=>{
    console.log(`server responded on port:${port}`)
})