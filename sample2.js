const express = require("express")

const app = express("")

const port = 5173

app.get("/flights/:from-:to",(req,res)=>{
    res.send(`flights from ${req.params.from} to ${req.params.to}`)
})

app.listen(port,()=>{
    console.log("server running in port 5173")
})