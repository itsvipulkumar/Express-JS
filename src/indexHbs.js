const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

// const pathnameStatic = path.join(__dirname, '../public')
const pathnameTemplate = path.join(__dirname, '../handleBar/views')

// View Engine Setup
app.set('view engine', 'hbs')

app.set('views', pathnameTemplate)
// app.use(express.static(pathnameStatic))
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