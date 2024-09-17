import express from "express";
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
