const express = require("express")

const app = express()

const port = 5173

app.get("/",(req,res)=>{
    res.send("its me fiyaz")
})

app.listen(port,()=>{
    console.log(`server responded in port: ${port}`)
})