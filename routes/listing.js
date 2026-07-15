const express = require("express")
const router = express.Router({ mergeParams: true }); //merge params(if child and parent have conflict params, child take precedence)

const wrapAsync = require("../utils/wrapAsync.js")
const Listing = require("../models/listing.js")
const { isLoggedIn, isOwner, listingValidate } = require("../middleware.js")
const multer = require("multer")
const {storage} = require("../cloudConfig.js");

const upload = multer({ storage});

const listingController = require("../controllers/listings.js")


router.route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        listingValidate,
        wrapAsync(listingController.createListing)
    );
    

//new route 
router.get("/new", isLoggedIn, listingController.renderNew)

//edit route
router.get("/:id/edit", isLoggedIn,
    wrapAsync(listingController.editListing))

//show route
router.route("/:id")
    .get(wrapAsync(listingController.showListing))           //show listing
    .put(isLoggedIn,                            //update route
        isOwner,
        upload.single("listing[image]"),
        listingValidate,
        wrapAsync(listingController.updateListing))
    .delete(isLoggedIn,                         //destroy route    
        wrapAsync(listingController.destroyListing))

module.exports = router;