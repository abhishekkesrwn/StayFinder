const mongoose = require("mongoose")
const {Schema}  = mongoose;


//new review schema

const reviewSchema = new Schema({
    comment : {
        type : String,
        trim : true
    },
    rating : {
        type : Number,
        max : 5, min: 1,
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
})

module.exports = mongoose.model("Review" , reviewSchema)