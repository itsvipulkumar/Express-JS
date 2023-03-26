const express = require("express");
const path = require("path")
const app = express();



// console.log(__dirname)

// console.log(path.join(__dirname, './public'));
const pathName = path.join(__dirname, './public');

app.use(express.static(pathName))
app.get("/", (req, res) => {
    // res.send("Hello from the Expresss JS")
    res.write("<h1>Hello from the Expresss JS</h1>")
    res.write("Hello from the Expresss JS")
    res.send()
    res.write("Hello from the Expresss JS")

})
app.get('/about', (req, res) => [
    res.send({
        id: 1,
        name: "Vipul",
    })
])
// API ( get , post, put, delet) -- CURD Operations


app.listen(8000, () => {
    console.log("Express is running on 8000")
})