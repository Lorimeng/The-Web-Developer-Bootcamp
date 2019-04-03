var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
    
    {
        name: "Cloud's Rest", 
        image: "https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg",
        description: "Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities.Camping can be enjoyed through all four seasons"
        
    },
    {
        name: "Dessert", 
        image: "https://images.unsplash.com/photo-1529073723059-c0fd830807a5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=641c06017fe7034aefb9167aea6716e2&auto=format&fit=crop&w=1119&q=80",
        description: "Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities.Camping can be enjoyed through all four seasons"
        
    },
    {
        name: "333333", 
        image: "https://media.mnn.com/assets/images/2015/09/tents-at-night-12.jpg.653x0_q80_crop-smart.jpg",
        description: "Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities.Camping can be enjoyed through all four seasons"
        
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

