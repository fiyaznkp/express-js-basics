// const express = require("express")

// const app = express()

// const port = 5173

// app.listen(port,()=>{
//     console.log(`server running in port:${port}`)
// })

// const express = require("express")

// const app = express()

// const port = 5173

// app.listen(port,()=>{
//     console.log(`server running on port : ${port}`)
// })

const express = require("express")

const port = 5173

const app = express()

app.get("/",(req,res)=>{
    res.send("gd aftrnoon")
})

app.listen(port,()=>{
 console.log(`sever running on port:${port}`)
})