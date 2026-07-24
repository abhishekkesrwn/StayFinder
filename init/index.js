const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js")

main()
    .then(() => {
        console.log("Connected to DB");
        initDB();
    })
    .catch(console.error);
async function main() {
    await mongoose.connect(mongooseURL)
}

const initDB = async () => {
    await Listing.deleteMany({})
    initdata.data = initdata.map((obj) => ({ ...obj, owner: "6a576821e407ed70598d08ff" }))  //initData is import and data is object inside it
    await Listing.insertMany(initdata.data);
    console.log("data added")
}
