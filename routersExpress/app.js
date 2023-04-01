import express from 'express';
import path from 'path'
import data from './routes/data.js'
// const express = require('express')

// const pathName = path.join(process.cwd(), './app.js');
// console.log(pathName) // D:\Full Stack Web Dev\Express-Js\routersExpress\app.js
const port = process.env.PORT || 3000;
const app = express();

// app.get("/:id", (req, res) => {
//     res.send(`User ${req.params.id} got it`) // o/p-->    User 345 got it
//     console.log(req.params.id);
// })

// app.listen(port, () => {
//     console.log(`Server is runnig on port no ${port}`)
// })

// views

/**
 *
 * 1. in olr vesion express
 * we use path.join(__dirname,"./app.js")
 *
 * 2. in ES^ we use
 *
 * path.join(process.cwd(),"./app.js")
 *
 * processs is a global node object and cwd is a method which return where nod is running currently
*/


// using routers

app.use("/", data)

app.listen(port, () => {
    console.log(`Server is runnig on port no ${port}`)
})
