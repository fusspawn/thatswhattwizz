var express = require("express");
var twss = require("twss");
var app = express.createServer();
app.listen(8080);


app.set('view options', {
  layout: false
});

app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.post("/classify", function(req, res) {
    console.log("user asked:" + req.param("question", "NULL");
    res.send(JSON.stringify({result: 
                                twss.is(req.param("question", "NULL")),
                             prob: 
                                twss.prob(req.param("question", "NULL")),
                             question:
                                req.param("question", "NULL")
                            }));    
});