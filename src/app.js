const express = require('express');
const connectDB = require('./config/database');
const app = express();

const PORT = 3000;

connectDB().then(() =>{
    console.log("Database connnected successfully")
    app.listen(PORT, () => {
        console.log(`Server is successfully listening on port ${PORT}`);
        
    });
}).catch(err => {
    console.log("Error in connecting to DB");
})

