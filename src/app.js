const express = require('express');
const app = express();

const PORT = 3000;

const {adminAuth, UserAuth} = require('./middlewares/auth')

//Handle Auth Middleware for all request GET,POSt,PUT,DELETE
app.use("/admin" ,  adminAuth)
//One Method is this
app.use("/admin" ,  UserAuth)

//Other method is this
app.get("/user",UserAuth, (req, res) => {
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