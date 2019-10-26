var express=require("express");
var router=express.Router();
var Campground=require("../models/campground");


// INDEX - SHOW ALL CAMPGROUNDS
router.get("/campgrounds",function(req,res){
  // res.render("campgrounds",{campgrounds:campgrounds});
  Campground.find({},function(err,allCampgrounds){
    if (err) {
      console.log(err);
    }
    else{
      res.render("campgrounds/index",{campgrounds:allCampgrounds});
    }
  });
});
// CREATE - ADD NEW CAMPGROUND TO DB
router.post("/campgrounds",isLoggedIn,function(req,res){
    var name=req.body.name;
    var price=req.body.price;
    var image=req.body.image;
    var desc=req.body.description;
    var author={
        id:req.user._id,
        username:req.user.username
    }
    var newCampground={name:name,price:price,image:image,description:desc,author:author};
    Campground.create(newCampground,function(err,newlyCreated){
        if (err) {
            req.flash("error","Something went wrong");
            console.log(err);
        } else {
            req.flash("success","Successfully created a Campground");
            res.redirect("/campgrounds");
        }
    });
});

// NEW ROUTE
router.get("/campgrounds/new",isLoggedIn,function(req,res){
  res.render("campgrounds/new");
});

// SHOW ROUTE
router.get("/campgrounds/:id",function(req,res){
  // res.send("THIS WILL BE A SHOW PAGE ONE DAY");
  Campground.findById(req.params.id).populate("comments").exec(function(err,foundcampground){
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/show",{campground:foundcampground});
    }
  });
});

// EDIT CAMPGROUND ROUTES
router.get("/campgrounds/:id/edit",checkCampgroundOwnership,function(req,res){
    Campground.findById(req.params.id,function(err,foundCampground){
        res.render("campgrounds/edit",{campground:foundCampground});
    });
});
// UPDATE CAMPGROUND ROUTES
router.put("/campgrounds/:id",checkCampgroundOwnership,function(req,res){
    Campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,updatedCampground){
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            req.flash("success","Campground Successfully Updated");
            res.redirect("/campgrounds/"+req.params.id);
        }
    });
});

// DELETE ROUTES

router.delete("/campgrounds/:id",checkCampgroundOwnership,function(req,res){
    Campground.findByIdAndRemove(req.params.id,function(err,updatedCampground){
        if (err) {
            console.log(err);
            req.flash("error","Something went wrong");
            res.redirect("/campgrounds");
        } else {
            req.flash("success","Campground deleted");
            res.redirect("/campgrounds");
        }
    });
});

function isLoggedIn(req,res,next){
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error","You need to be logged in to do that");
    res.redirect("/login");
}

function checkCampgroundOwnership(req,res,next){
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id,function(err,foundCampground){
            if (err) {
                req.flash("error","Campground not found");
                res.redirect("back");
            } else {
                // does user own the campground?
                if (foundCampground.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error","You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error","You need to be logged in to do that");
        res.redirect("back");
    }
}

module.exports=router;
