const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/", (req, res) => {
    console.log("receive:", req.body);
    res.status(201).send;
})

app.put(":/id", (req, res) => {
    console.log("receive,id:", req.params.id);
    console.log("receive,body:", req.body);
    res.send();
})

app.delete("/:id", (req, res) => {
    console.log("receive,id:", req.params.id);
    res.status(204).send();
})
app.listen(port, () => {
    console.log(`Express server listening at https://localhost:${port}`);
})