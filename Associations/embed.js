var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true });


//POST
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
var Post = mongoose.model("Post", postSchema);

//USER
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);



// var newUser = new User({
//     email: "lori@hogwarts.edu",
//     name: "Lori Gao"
// });

// newUser.posts.push({
//     title: "what are you doing",
//     content: "HI!"
// })

// newUser.save(function(err, user){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "Lori Gao"}, function(err, user){
   if (err) {
      console.log(err);
   } else {
       user.posts.push({
           title: "3 things i really hate",
           content: "ewwwww"
       });
       user.save(function(err, user){
           if (err) {
               console.log(err);
           } else {
               console.log(user);
           }
       });
   }
});



