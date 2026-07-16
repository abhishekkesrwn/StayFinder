// to access any variable : process.env. NODE_ENV is key which is now empty if it is set at producation it
//  will not able to require dotenv middleware
if (process.env.NODE_ENV != "production"){ 
    require("dotenv").config()
}


const express = require("express");
const app = express();
const { mongoose } = require("mongoose");
const MongoStore = require('connect-mongo').default;
const path = require("path")
const Listing = require("./models/listing.js")
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");

const wrapAsync = require("./utils/wrapAsync.js")
const ExpressError = require("./utils/ExpressError.js")
const Review = require("./models/review.js");
const { wrap } = require("module");
const session = require("express-session")
const flash = require("connect-flash")

const { listingSchema ,reviewSchema } = require("./schema.js")
const User = require("./models/user.js")

const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const localStrategy = require("passport-local");

const listingRoute = require("./routes/listing.js")
const reviewRoute = require("./routes/reviews.js")
const userRoute = require("./routes/user.js")
const dbURL = process.env.ATLASDB_URL;
const localMongoURL = "mongodb://127.0.0.1:27017/wanderlust";

const store = MongoStore.create({
    mongoUrl : dbURL,
    crypto :{
        secret : process.env.SECRET
    },
    touchAfter : 24*3600
})

store.on("error" , (err)=>{
    console.log("error in mongoose session")
})



const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7*24*60*60*1000,
        maxAge : 7*24*60*60*1000,                      //to prevent from cross scripting attack
    }
}

app.set("view engine", "ejs");   //Whenever I call res.render(), use the EJS template engine to render the file home.ejs == home
app.set("views", path.join(__dirname, "views")) //by default name views, all my tempelate files are in views folder

//middlewares
app.use(express.urlencoded({ extended: true })); // if any encoded data is there express will understand it (post request)
app.use(express.json()); // for JSON requests
app.use(methodOverride('_method')) // for put, delete
app.engine("ejs", ejsMate); 
app.use(express.static(path.join(__dirname, "public")))
// Add this line to serve the uploads folder publicly
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(session(sessionOptions))
app.use(flash())

//configuration strategy for passport

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


//database connection
main().then(
    (res) => console.log("connected successfully to DB" )).catch(
        (err) => console.log("error in connection to database"))
//main function
async function main() {
    // await mongoose.connect(localMongoURL);
    await mongoose.connect(dbURL)
}


app.use((req,res,next)=>{
    res.locals.success = req.flash("success")
    res.locals.error = req.flash("error")
    res.locals.currUser = req.user
    next()
})

//all listings
app.use ("/listings" , listingRoute)
// review  routes
app.use("/listings/:id/reviews" , reviewRoute)
//userSignup route
app.use("/" , userRoute)

app.use((req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
});

//home route
app.get("/" , (req,res)=>{
    res.redirect("/listings");
    //for all non existing route
})
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found!"))
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong(error handler)";
    console.log(err);
    res.status(statusCode).render("error.ejs", { message })
})
app.listen("8080", () => {
    console.log("app is started listening on the port 8080")
})