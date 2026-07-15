const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js")

main()
    .then(() => console.log("connected to DB"))
    .catch((err) => console.log("error in connecting to db"))

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}

const initDB = async()=>{
    await Listing.deleteMany({})
    initdata.data = initdata.data.map((obj)=>({...obj, owner: "68b48531f304a4a47e398f65" }))  //initData is import and data is object inside it
    await Listing.insertMany(initdata.data);
    console.log("data added")
}

initDB();