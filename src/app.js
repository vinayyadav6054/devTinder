const express = require('express');
const app = express();

const PORT = 3000;

app.use("/",(err, req, res, next) => {
    if(err){
        //log your error
        res.status(500).send("Something went wrong");
    }
});

app.get("/getuserData", (req, res) => {
    try {
        //Logic of DB call and get user data
        throw new Error("DB is not connected");
        res.send("Useeer Data Sent");
    } catch (error) {
        res.status(500).send("some error occured ");

    }
   
});

app.use("/",(err, req, res, next) => {
    if(err){
        //log your error
        res.status(500).send("Something went wrong");
    }
});

app.listen(PORT, () => {
    console.log(`Server is successfully listening on port ${PORT}`);
    
});