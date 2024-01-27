const express = require("express");
const cookieParser = require("cookie-parser") ;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017").then(()=> console.log("mongodb is connected"))
const bookPaths = require("../routes/bookRoutes");
const usersPath = require("../routes/usersRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(cookieParser()) ;
app.use(express.json());
app.use(bookPaths);
app.use(usersPath);
// handle cookies
app.get('/set-cookies' ,(req , res )=>{
    res.cookie('newUser' , false)
    res.send('you got the cookies')
})
app.get('/read-cookies' ,(req , res )=>{
    
})



const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
