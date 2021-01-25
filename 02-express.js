const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.post('/create', (req, res) => {
    const body = req.body
    console.log('>>', body)
    res.send({data: body})
})

app.get('/path', (req, res) => {
    res.send({alive: true})
})

app.listen(3000, () => {
    console.log('hello world in express!!')
})