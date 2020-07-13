const express = require("express");
const app = express();
const port = 8000;


app.use("/", require("./router"));


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("running at port ", port);
});