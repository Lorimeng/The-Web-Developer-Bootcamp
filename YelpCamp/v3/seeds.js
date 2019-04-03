var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
    
    {
        name: "Cloud's Rest", 
        image: "https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg",
        description: "blah blah blah"
        
    },
    {
        name: "Dessert", 
        image: "https://images.unsplash.com/photo-1529073723059-c0fd830807a5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=641c06017fe7034aefb9167aea6716e2&auto=format&fit=crop&w=1119&q=80",
        description: "Hi Hi Hi"
        
    },
    {
        name: "333333", 
        image: "https://unsplash.com/photos/zvv6F7EKNMg",
        description: "blah blah blah"
        
    }
    
]


function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if (err) {
            console.log(err);
        }
        console.log("remove campgrounds");
        
        //add a few campgrounds
        data.forEach(function (seed) {
            Campground.create(seed, function(err, campground){
                if (err) {
                    console.log(err);
                } else {
                    console.log("add a campground");
                    
                     Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
}

module.exports = seedDB;

