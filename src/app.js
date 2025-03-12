const express = require('express');
const app = express();

const PORT = 3000;

//This will only handle Get call to /user

//GET /users --> midleware chain ==> request handler 
app.use("/user",
    (req, res, next) => {
    console.log("Handling the route user!!");
    //res.send("Response!!!");
    next();
   },
);

app.get("/user", (req, res,next) =>{
    console.log("Handling the route user!!1");
    next();
},
(req, res) => {
    res.send("Response!!!");
}
)

//Createa a server which is running on 3000 port
app.listen(PORT, () => {
    console.log(`Server is successfully listening on port ${PORT}`);
    
});