const express = require('express')
const open = require('open')
const filget = require('figlet')

const app = express()

app.use(express.static('public'))

app.listen(5000, () => {

    filget('Simple-pkg', (err, data) => {
        if (err) return console.dir(err)
        console.log(data)
        console.log()
        console.log(`Bonjour, je suis le serveur de l'application MV-Manager.`)
        console.log(`Ouvrez un navigateur (Edge ou Chrome) à l'addresse http://localhost:5000/`)
        console.log()
    })
    open('http://localhost:5000/')

})