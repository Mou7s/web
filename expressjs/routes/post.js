const express = require('express');
var route = express.Router();

route.get("/", (req, res) => {
    res.send("Hello World");
})

route.post("/", (req, res) => {
    console.log("receive:", req.body);
    res.status(201).send;
})

route.put(":/id", (req, res) => {
    console.log("receive,id:", req.params.id);
    console.log("receive,body:", req.body);
    res.send();
})

route.delete("/:id", (req, res) => {
    console.log("receive,id:", req.params.id);
    res.status(204).send();
})