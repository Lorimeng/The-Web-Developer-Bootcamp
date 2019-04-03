var express = require ("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: "true"}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1539580709660-0505d36fa6e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df3e6c039eb1e5e32fef492bf6e3376e&auto=format&fit=crop&w=1601&q=80"},
        {name : "Graniten Hill", image:"https://images.unsplash.com/photo-1539524624808-6263194e0ce3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74c231efdd512510511c9d1129cf5b84&auto=format&fit=crop&w=1534&q=80"},
        {name: "Mountain Goat's Rest", image:"https://images.unsplash.com/photo-1539524624808-6263194e0ce3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74c231efdd512510511c9d1129cf5b84&auto=format&fit=crop&w=1534&q=80"}
];

app.get("/", function(req, res){
    res.render("landing");
});


app.get("/campgrounds", function(req, res){
    
    res.render("campgrounds", {campgrounds: campgrounds});
});


app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name : name, image: image};
    campgrounds.push(newCamp);
    
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});



app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp server has started"); 
});