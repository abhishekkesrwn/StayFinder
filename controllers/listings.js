const Listing = require("../models/listing.js")
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding'); //we are geocoding services
const mapToken = process.env.MAPBOX_TOKEN
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
//index
module.exports.index = async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings })
}

//new route
module.exports.renderNew = (req, res) => {
    res.render("listings/new.ejs")
}

//show route
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    let selectedListing = await Listing.findById(id)
    .populate({
        path: "reviews",
        populate: {
            path: "author"
            }
        })
        .populate("owner") //to populate review into text
    if (!selectedListing) {
        req.flash("error", "Listing you request for is not available")
        res.redirect("/listings")
    }
    res.render("listings/show.ejs", { selectedListing })
}
//create route
module.exports.createListing = async (req, res) => {
    let response = await geocodingClient
    .forwardGeocode({
        query: req.body.listing.location,
        limit: 1 //how many coordinate it will give
    })
    .send()
    const newlisting = new Listing(req.body.listing)       //newlisting is new data object
    newlisting.owner = req.user._id;
    newlisting.geometry = response.body.features[0].geometry
    if (req.file) {
        newlisting.image.url = req.file.path; // or req.file.filename depending on your frontend setup
        newlisting.image.filename = req.file.finename;
    }
    let savedlisting = await newlisting.save();
    req.flash("success", "New Listing added successfully.")
    res.redirect("/listings")
}

//edit listing   
module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    let selectedListing = await Listing.findById(id);
    let originalUrl = selectedListing.image.url;
    console.log(originalUrl);
    const newImageUrl = originalUrl.replace("/upload", "/upload/h_250")
    res.render("listings/edit.ejs", { selectedListing, newImageUrl })
}

//update Listing
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = { ...req.body.listing }

    if (req.file) {
        listing.image.url = req.file.path;
        listing.image.filename = req.file.path;
    }
    await Listing.findByIdAndUpdate(id, listing);
    req.flash("success", "Listing updated successfully.")
    res.redirect(`/listings/${id}`)
}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id)
    req.flash("success", "Listing deleted successfully.")
    console.log(deletedListing)
    res.redirect("/listings")
}
