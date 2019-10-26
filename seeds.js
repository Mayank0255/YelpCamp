var mongoose=require("mongoose");
    Campground=require("./models/campground");
    Comment=require("./models/comment");


var data=[
  {
    name:"Alaska",
    image:"https://i.pinimg.com/originals/aa/e6/4f/aae64ff37257a90cbb013d15a64da905.jpg",
    description:"A tick is an annoying parasite, dependent on mammal blood to survive. They feed on cattle, cats, dogs, and humans. They use their sharp snouts to cut an incision in the skin’s surface. They embed themselves by inserting themselves into the skin and suck the host’s blood."
  },
  {
    name:"Iceland",
    image:"https://www.wallpaperflare.com/static/730/267/668/tent-camping-mountains-landscape-wallpaper.jpg",
    description:"A tick is an annoying parasite, dependent on mammal blood to survive. They feed on cattle, cats, dogs, and humans. They use their sharp snouts to cut an incision in the skin’s surface. They embed themselves by inserting themselves into the skin and suck the host’s blood."
  },
  {
    name:"Arizona",
    image:"https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    description:"A tick is an annoying parasite, dependent on mammal blood to survive. They feed on cattle, cats, dogs, and humans. They use their sharp snouts to cut an incision in the skin’s surface. They embed themselves by inserting themselves into the skin and suck the host’s blood."
  },
  {
    name:"Colorado",
    image:"https://images5.alphacoders.com/555/555700.jpg",
    description:"A tick is an annoying parasite, dependent on mammal blood to survive. They feed on cattle, cats, dogs, and humans. They use their sharp snouts to cut an incision in the skin’s surface. They embed themselves by inserting themselves into the skin and suck the host’s blood."
  },
  {
    name:"Norway",
    image:"http://www.worldbiking.info/wordpress/wp-content/uploads/2018/08/final-03037.jpg",
    description:"A tick is an annoying parasite, dependent on mammal blood to survive. They feed on cattle, cats, dogs, and humans. They use their sharp snouts to cut an incision in the skin’s surface. They embed themselves by inserting themselves into the skin and suck the host’s blood."
  }
]


function seedDB(){
  // Remove all campgrounds
  Campground.remove({},function(err){
    // if (err) {
    //   console.log(err);
    // }
    // console.log("removed campgrounds");
    // data.forEach(function(seed){
    //   Campground.create(seed,function(err,campground){
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log("ADDED A NEW CAMPGROUND");
    //       // create a comment
    //       Comment.create(
    //         {
    //           text:"I am on a drug, it's called Charlie Sheen. It's not available because if you try it you will die. Your face will melt off and your children will weep over your exploded body",
    //           author:"Charlie Sheen"
    //         },function(err,comment){
    //           if (err) {
    //             console.log(err);
    //           } else {
    //             campground.comments.push(comment);
    //             campground.save();
    //             console.log("ADDED COMMENT");
    //           }
    //         }
    //       );
    //     }
    //   });
    // });
  });
  // add a few campground

  // add a few comments
}

module.exports=seedDB;
