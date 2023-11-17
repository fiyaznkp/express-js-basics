const express = require("express")

const app = express()

const port = 5173

app.get("/",(req,res)=>{
    res.send("<h1>respect</h1>")
})

app.listen(port,()=>{
    console.log(`server is running in port:${port}`)
})