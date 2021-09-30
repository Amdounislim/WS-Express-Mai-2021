const express = require('express')

const app = express()

app.use(express.json())

let users = [
    { name: "Aziz", age: 24, id: 1 },
    { name: "Wela", age: 22, id: 2 },
    { name: "GHasston", age: 28, id: 3 }
]

app.get("/users", (req, res) => {
    res.send(users)
})

app.post("/users", (req, res) => {
    let newUser = { ...req.body, id: Math.random() }
    users.push(newUser)
    res.send(users)
})

app.delete('/users/:id', (req, res) => {
    let id = Number(req.params.id)
    users = users.filter(el => el.id !== id)
    res.send(users)
})

app.put("/users/:id", (req, res) => {
    let id = Number(req.params.id)
    users = users.map(el => el.id === id ? { ...el, ...req.body } : el)
    res.send(users)
})


const port = process.env.PORT || 7000
app.listen(port, err => {
    err
        ? console.log(err)
        : console.log(`the server is running on port http://localhost:${port}`)
})