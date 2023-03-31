import express from 'express';

// const express = require('express')
const port = process.env.PORT || 8000;
const app = express();

app.get("/:id", (req, res) => {
    res.send(`User ${req.params.id} got it`) // o/p-->    User 345 got it
    console.log(req.params.id);
})

app.listen(port, () => {
    console.log(`Server is runnig on port no ${port}`)
})