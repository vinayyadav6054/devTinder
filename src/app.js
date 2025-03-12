const express = require('express');
const app = express();

const PORT = 3000;

//This will only handle Get call to /user
app.use("/user",
    (req, res, next) => {
    console.log("Handling the route user!!");
    //res.send("Response!!!");
    next();
   },
    (req, res,next) =>{
        console.log("Handling the route user2!!");     
        //res.send("Response2!!!");
        next();
   },
   (req, res,next) =>{
        console.log("Handling the route user3!!");     
        //res.send("Response3!!!");
        next();
    },
        (req, res,next) =>{
        console.log("Handling the route user4!!");   
        next();  
        //res.send("Response4!!!"); 
    },
    (req, res, next) => {
        console.log("Handling the route user5!!");
        res.send("Response5!!!")
    }
   
)

//Createa a server which is running on 3000 port
app.listen(PORT, () => {
    console.log(`Server is successfully listening on port ${PORT}`);
    
});