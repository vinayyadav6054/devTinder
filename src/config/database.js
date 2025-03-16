const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(
            "mongodb+srv://vinayyadav6540:Vinay122@devtinder.owulm.mongodb.net/?retryWrites=true&w=majority&appName=devTinder");
    }
    catch{
        console.log("Error in connecting to DB");
    }
}

module.exports = connectDB;


