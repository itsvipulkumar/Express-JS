// app

import express from 'express'
import web from './routes/web.js'
const app = express();

const port = process.env.PORT || 3000;


app.use("/", web)

app.set("/", (req, res) => {
    res.send("This is home page")
})
app.listen(port, () => {
    console.log("Sever is runnign at 3000")
})
