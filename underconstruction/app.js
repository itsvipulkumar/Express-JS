import express from 'express'
import web from './routes/web.js'
import underConstruction from './middleware/uc-middleware.js';
const port = process.env.PORT || 3000
const app = express();


// app.use(underConstruction) // for all site


app.use('/about', underConstruction) // for a perticular page site

// application level middleware





app.set('views', './views')
app.set('view engine', 'ejs')
app.use("/", web)
// app.get("/", (req, res) => {
//     res.send("Hello Under Construction page!");
// })
app.listen(port, () => {
    console.log(`server is running at ${port}`)
})