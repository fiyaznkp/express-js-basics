const express = require("express")

const app = express()

const port = 5173

app.get("/country/:state.:district",(req,res)=>{
    res.send(`my place is ${req.params.district} in ${req.params.state}`)
})

app.listen(port,()=>[
    console.log("server running")
])