var express = require("express"); 
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
var friends = ["Tony", "Miranda", "Justin", "Lily"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    
    res.render("friends", {friends: friends});
});


app.listen(process.env.PORT, process.env.IV, function(){
    console.log("server is listening");
});