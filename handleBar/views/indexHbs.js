const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

// View Engine Setup
app.set('views', path.join(__dirname))
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
    res.render('index', {
        array: ['One', 'Two', 'Three', 'Four'],
        message: 'Vipul'
    })
})

app.listen(8080, function (error) {
    if (error) throw error
    console.log("Server created Successfully")
})
