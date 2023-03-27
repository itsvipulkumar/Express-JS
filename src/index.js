const express = require("express");
const requests = require("requests");
const path = require("path")
const app = express();



// console.log(__dirname)

// console.log(path.join(__dirname, './public'));
// const pathName = path.join(__dirname, './public');

const api = "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=e098cb9deaf5b4a9b774d6d808ccd785"


// app.use(express.static(pathName))
// app.get("/", (req, res) => {
//     // res.send("Hello from the Expresss JS")
//     res.write("<h1>Hello from the Expresss JS</h1>")
//     res.write("Hello from the Expresss JS")
//     res.send()
//     res.write("Hello from the Expresss JS")

// })
// app.get('/about', (req, res) => [
//     res.send({
//         id: 1,
//         name: "Vipul",
//     })
// ])
// API ( get , post, put, delet) -- CURD Operations


app.get("/about", (req, res) => {


    // if(req.url=="/")
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=e098cb9deaf5b4a9b774d6d808ccd785`
    )
        .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];

            console.log(`City : ${arrData[0].name} and Temp: ${arrData[0].main.temp}`);
            let temp = arrData[0].main.temp;
            if (temp > 200) {
                res.end("Clouds")
            }
        })
        .on("end", (err) => {
            if (err) return console.log("errror")
            res.end();
        })
})

app.listen(8000, () => {
    console.log("Express is running on 8000")
})