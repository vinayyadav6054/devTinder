const express = require('express');
const app = express();

//This will only handle Get call to /user
app.get("/user", (req, res) => {
    res.send({firstName: "Vinay", lastName:"Yadav"})
});

app.post("/user", (req, res) => {
    //Saving database to the database
    res.send("Data successfully saved to the database")
    
})

app.delete("/user", (req, res)=>{
    res.send("Delete api")
})

//This will match all the HTTP matches API calls to /test
app.use("/test",(req, res) => {
    res.send("Hello from the server")
})


//Createa a server which is running on 3000 port
app.listen(3000, () => {
    console.log(`Server is successfully listening on port 3000`);
    
});