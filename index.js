const express = require('express')
const app = express()
const {readFile} = require('fs')
const port = 3000


app.get('/', (req, res) => {
    readFile('./home.html','utf-8', (err, html) => {
    if(err) {
        res.send("service not found")
    }
    res.send(html)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})