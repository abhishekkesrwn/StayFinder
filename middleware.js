const Listing = require("./models/listing.js")
const ExpressError = require("./utils/ExpressError.js")
const { listingSchema, reviewSchema } = require("./schema.js")
const Review = require("./models/review.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl
        req.flash("error", "you are not logged in")
        return res.redirect("/login")
    }
    next()
}

//middleware invokes when condition satisfy

module.exports.saveRedirectUrl= (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl
    }
    next();
}

//middleware works on edit button on update page
module.exports.isOwner = async(req,res,next)=>{
    let {id}  = req.params;
    let listing = await Listing.findById(id)
        if(!listing.owner._id.equals(res.locals.currUser._id)){
            req.flash("error" , "You are not the user")
            return res.redirect(`/listings/${id}`)
        }
        next()
}
module.exports.isReviewAuthor  = async(req,res,next)=>{
    let {reviewId, id}  = req.params;
    let review = await Review.findById(reviewId)
        if(!review.author._id.equals(res.locals.currUser._id)){
            req.flash("error" , "You are not the user")
            return res.redirect(`/listings/${id}`)
        }
        next()
}

//server side schema validation
module.exports.listingValidate = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg)
    } else {
        next()
    }
}