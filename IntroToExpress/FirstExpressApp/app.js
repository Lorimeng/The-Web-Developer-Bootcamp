var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "Onik",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "hehe"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
    
});


app.get("/repeat/:greeting/:number", function(req, res) {
    
    var greeting = req.params.greeting;
    var number = Number(req.params.number);
    
    for(var i = 0; i < number; i++){
        res.write(greeting + " ");
    }
    
    res.end();
    
});


app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

    
// Tell express to listen for requests
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!");
});