const express = require("express")

const app = express ()

const port = 5173

app.get("/products",(req,res)=>{
    res.send("All Products")
})

app.get("/products/laptop",(req,res)=>{
    res.send("Laptops")
})

app.get("/products/mobiles",(req,res)=>{
    res.send("Mobiles")
})

app.listen(port,()=>{
    console.log("server running on port 5173")
})