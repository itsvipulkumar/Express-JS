const express = require("express"); //old method 

// import express from 'express' // new method 
const path = require("path")
const app = express();
const port = process.env.PORT || 3000;
const pathname = path.join(__dirname, "../public")


app.use(express.static(pathname));
app.get("/", (req, res) => {
    res.send("Welcome to this app")
})

app.get("/about", (req, res) => {
    res.send("Welcome to this about app")
})

app.get("*", (req, res) => {
    res.send("Error Page")
})

app.listen(port, () => [
    console.log("Server is running at 3000")
]);


// more than 1 call back funtion in ruoting

// app.get('/ab?cd', (re1, res, next) => {
//     res.send("Hello home page");
//     next();
// }, (req, res) => {
//     res.send("hello other page")
// }
// )

//regular exp
// app.get(/a/, (re1, res) => { //if path contain a somewhere this will show
//     res.send("Hello home page");

// }
// )