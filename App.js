const express = require("express")

const App = express()

const port = 5173

App.get("/",(req,res)=>{
  res.send("hello")
})

App.listen(port, ()=>{
    console.log(`App listening on port: ${port}`)
})