const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tempo"
});


con.connect((err) => {
    if (err) {
        console.log("couldnt connect");
        return;
    }

    console.log("connection established")
})


module.exports = con;