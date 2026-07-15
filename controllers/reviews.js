const reviewController = require("../models/review.js")
const Listing = require("../models/listing.js")
const Review  = require("../models/review.js")

module.exports.addReview = async (req, res) => {
        let listing = await Listing.findById(req.params.id)
        let newReview = new Review({
            comment: req.body.reviews.comment.trim(),
            rating: req.body.reviews.rating
        })
        newReview.author = req.user._id;
        console.log(newReview)
        await newReview.save()
        listing.reviews.push(newReview)
        await listing.save()
        req.flash("success", "New review added successfully")
        res.redirect(`/listings/${listing._id}`)
    }

module.exports.destroyReview = (async (req, res) => {
        let { id, reviewId } = req.params;

        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }) //find and then update by removing the reviewId
        await Review.findByIdAndDelete(reviewId)
        req.flash("success", "Review deleted successfully.")
        res.redirect(`/listings/${id}`)
    })