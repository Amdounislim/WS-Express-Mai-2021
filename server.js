// console.log('hello')

//1- import express
const express = require('express')
//2- init express
const app = express()

function logger(req, res, next) {
    // console.log("method : ", req.method)
    // console.log("path : ", req.path)
    // console.table({ method: req.method, path: req.url })
    if (5 > 10) {
        next()
    } else {
        res.send("Oups, the request is blocked")
    }
}

app.use(logger)

//3- create your endpoints
app.get("/", (req, res) => {
    res.send("Welcome to Ws-Exprss")
})



//5-Get the html files using sendFile
// app.get("/", (req, res)=>{
//     res.sendFile(__dirname + "/public/" )
// })

app.use(express.static(__dirname + "/public"))





//4- run server
const port = process.env.PORT || 5000
app.listen(port, err => {
    err
        ? console.log(err)
        : console.log(`the server is running on port http://localhost:${port}`)
})