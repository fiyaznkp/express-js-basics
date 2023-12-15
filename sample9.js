const express = require("express")

const app = express()

const port = 5173

const bodyParser = require('body-parser');     


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("home page")
})

app.post("/body",(req,res)=>{
   res.send(req.body.name)
})

app.listen(port,()=>{
   
})