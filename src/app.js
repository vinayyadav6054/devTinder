const express = require('express');
const connectDB = require('./config/database');
const app = express();
const User = require('./models/user.model')

const PORT = 3000;
 
//This middleware now allows us to parse the request body for all the route
app.use(express.json());


app.post('/signup',async (req, res) => {
    
    console.log(req.body )

    //Creating a new instance of the User model
    const user = new User(req.body);

    try{
        await user.save();
        res.send("User created successfully")
    }catch{
        res.status(400).send("Error in creating user"+err.message);
    }
    
});


//First connect to the database then connect to the server 
connectDB().then(() =>{
    console.log("Database connnected successfully")
    app.listen(PORT, () => {
        console.log(`Server is successfully listening on port ${PORT}`);
        
    });
}).catch(err => {
    console.log("Error in connecting to DB");
})

