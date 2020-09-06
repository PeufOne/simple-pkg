const express = require('express')
const open = require('open')
const filget = require('figlet')

const app = express()

app.get('/', (req, res, next) => {
    res.send('Welcome')
})

app.get('/:txt', (req, res, next) => {
    filget(req.params.txt, (err, data) => {
        if (err) return res.send(`<pre>${data}</pre>`)
        res.send(`<pre>${data}</pre>`)
    })
})

app.listen(5000, () => {

    filget('Simple-pkg', (err, data) => {
        if (err) return console.dir(err)
        console.log(data)
    })
    open('http://localhost:5000/')

})