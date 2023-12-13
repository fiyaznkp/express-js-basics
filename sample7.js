const express = require("express")

const app = express()

const port = 5173



const user=(req,res,next)=>{
    console.log("user")
    next()
}
app.use(user)



app.get("/",(req,res,next)=>{
    console.log("home page")
    res.send("home page")
    next()

})

app.get("/profile",(req,res,next)=>{
    console.log('profile page')
    res.send("profile page")
    next()
})

app.get("/log",(req,res)=>{
    console.log("login page")
    res.send("login page")
    
})



app.listen(port,()=>{
    // console.log(`server running on port ${port}`)
})