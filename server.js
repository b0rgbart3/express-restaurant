var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

let tables = [];
let waitlist = [];


function handleRequest(fileName, res){ 
    fs.readFile(__dirname + "/public/" + fileName, function(err, data) {
        if (err) throw err;
        
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
}

app.get("/notes", function(req, res) {
    handleRequest("notes.html",res)
});
app.get("/api/notes", function(req, res) {
    res.end(tables);
});
    
app.get("*", function(req, res) {
    handleRequest("index.html",res)
});





app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
