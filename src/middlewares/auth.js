//Handle Auth Middleware for all request GET,POSt,PUT,DELETE
const adminAuth = (req, res, next) => {
    console.log("Admin Auth is getting checked!!!");
    const token = "xyz";
    const isAdminAuthorised  = token === "xyz"
     if(! isAdminAuthorised){
        res.status(401).send("Unauthorized Access");
     }
     else{
        next();
;     }
} 

const UserAuth = (req, res, next) => {
    console.log("User Auth is getting checked!!!");
    const token = "xyz";
    const isAdminAuthorised  = token === "xyz"
     if(! isAdminAuthorised){
        res.status(401).send("Unauthorized Access");
     }
     else{
        next();
;     }
} 


 module.exports = {adminAuth, UserAuth};