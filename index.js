// importing all headers and necessary files

const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const db = require("./config/mongoose");



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.use("/",require("./router/index"))




app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("Greatet code ever running sucessfully on ", port);
});