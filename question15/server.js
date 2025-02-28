const express = require("express");
const app = express();

app.use(express.json());

app.get("/fetch", (req, res) => {
    res.send("You have entered the /fetch route.");
});

app.post("/save", (req, res) => {
    res.send("You have entered the /save route.");
});

app.delete("/delete", (req, res) => {
    res.send("You have entered the /delete route.");
});

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});
