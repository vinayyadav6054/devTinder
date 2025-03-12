const express = require('express');
const app = express();

const PORT = 3000;

//This will only handle Get call to /user
app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params);
    
    res.send({firstName: "Vinay", lastName:"Yadav"})
});

app.get("/test", (req, res) => {
    console.log(req.query);
    
    res.send({firstName: "Vinay", lastName:"Yadav"})
});

//Createa a server which is running on 3000 port
app.listen(PORT, () => {
    console.log(`Server is successfully listening on port ${PORT}`);
    
});