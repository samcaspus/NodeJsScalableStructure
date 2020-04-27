const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/scalable_code_test");

const db = mongoose.connection;

db.on("error",console.error.bind(console,"Error caused"));

db.once("open",()=>{
    console.log("data base connected");
})

