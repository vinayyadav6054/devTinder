const express = require('express');
const app = express();

//This function is called request handler
// app.use('/', (req, res) => {
//     res.send("Hello from the dashbaord!!")
// })

//Order of the routes matter
app.use("/hello/2",(req, res) => {
    res.send("Hello 22 hello!!")
})

app.use("/hello",(req, res) => {
    res.send("Hello hello hello!!")
})



app.use("/test",(req, res) => {
    res.send("Hello from the server")
})


//Createa a server which is running on 3000 port
app.listen(3000, () => {
    console.log(`Server is successfully listening on port 3000`);
    
});