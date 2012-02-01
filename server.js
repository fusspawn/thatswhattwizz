var express = require("express");
var twss = require("twss");
var app = express.createServer();
app.listen(8080);

app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.post("/classify", function(req, res) {
    res.send(JSON.stringify({result: twss.is(req.param("question", " "))}));    
});