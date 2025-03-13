const express = require('express');
const app = express();

const PORT = 3000;

//Handle Auth Middleware for all request GET,POSt,PUT,DELETE
app.use("/admin",(req, res, next) => {
    console.log("Admin Auth is getting checked!!!");
    const token = "xyz";
    const isAdminAuthorised  = token === "xyz"
     if(! isAdminAuthorised){
        res.status(401).send("Unauthorized Access");
     }
     else{
        next()
;     }
})

app.get("/user", (req, res) => {
    //logic of Check if the request is authorized
        res.send("Useeer Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
    //logic of Check if the request is authorized
        res.send("All Data Sent");

})

app.get("/admin/deleteUseeer", (req, res) => {
    //logic of Check if the request is authorized
    res.send("User Deleted");
})

app.listen(PORT, () => {
    console.log(`Server is successfully listening on port ${PORT}`);
    
});