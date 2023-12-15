// const express = require("express")

// const app = express()

// const port = 5173

// const bodyParser = require("body-parser")

// const log = (req,res,next) =>{
//    next()
// }

// app.use(log)

// app.use( bodyParser.urlencoded({ extended: false }))
// app.get("/",(req,res)=>{
//     res.send("home page")
// })

// app.get("/ab",(req,res)=>{
//     res.send("about page")
// })
// app.get("/p",(req,res)=>{
//   res.send("profile page")

//   app.post("/body",(req,res)=>{
//     res.send(req.body)
//   })
// })
// app.listen(port,()=>{

// })

// // const express = require("express");
// // const bodyParser = require("body-parser");

// // const app = express();
// // const port = 5173;

// // // Middleware to parse url-encoded bodies
// // app.use(bodyParser.urlencoded({ extended: false }));

// // const log = (req, res, next) => {
// //     console.log("Middleware log");
// //     next();
// // };

// // app.use(log);

// // app.get("/", (req, res) => {
// //     res.send("home page");
// // });

// // app.get("/ab", (req, res) => {
// //     res.send("about page");
// // });

// // app.get("/p", (req, res) => {
// //     res.send("profile page");
// // });

// // // Route to access req.body
// // app.post("/body", (req, res) => {
// //     console.log(req.body); // Output the parsed body
// //     res.json(req.body); // Respond with the parsed body
// // });

// // app.listen(port, () => {
// //     console.log(`Server running on port ${port}`);
// // });

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 5173;

// // Middleware to parse url-encoded bodies
// app.use(bodyParser.urlencoded({ extended: false }));

// const log = (req, res, next) => {
//     console.log("Middleware log");
//     next();
// };

// app.use(log);

// app.get("/", (req, res) => {
//     res.send("home page");
// });

// app.get("/ab", (req, res) => {
//     res.send("about page");
// });

// app.get("/p", (req, res) => {
//     res.send("profile page");
// });

// // Route to access req.body
// app.post("/body", (req, res) => {
//     console.log(req.body); // Output the parsed body
//     res.json(req.body); // Respond with the parsed body
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });


// const express = require('express')

// const app = express()

// const port = 5173

// app.get("/",(req,res)=>{
//     res.send("home page")
// })

// app.post("/ab",(req,res)=>{
//     res.send(req.body)
// })

// app.listen(port,()=>{

// })

const express = require('express');
const bodyParser = require('body-parser');     

const app = express();
const port = 5173;

// Middleware to parse JSON and url-encoded request bodies
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("home page");
});

app.post("/ab", (req, res) => {
    res.send(req.body); // Send the parsed request body as response
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
