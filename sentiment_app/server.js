const express = require("express");
const path = require("path");
const nbModel = require("./naivebayes");

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/predict", (req, res) => {
    const userText = req.body.text;
    const sentiment = nbModel.predict(userText);
    res.json({ sentiment });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
