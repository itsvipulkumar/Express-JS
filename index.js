const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.send("Hello from the Expresss JS")
})
app.get('/about', (req, res) => [
    res.send("Hello from the about page")
])
// API ( get , post, put, delet) -- CURD Operations



app.listen(8000, () => {
    console.log("Express is running on 8000")
})