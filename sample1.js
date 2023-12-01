const express = require("express")

const app = express ()

const port = 5173

app.get("/products",(req,res)=>{
    res.send("All Products")
})

app.get("/products/:category/:brand",(req,res)=>{
   const {category} = req.params
   const {brand} = req.params

   res.send(`product:${category} and ${brand}`)
   
})


app.listen(port,()=>{
    console.log("server running on port 5173")
})