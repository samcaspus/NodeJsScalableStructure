
const mysql = require("../config/mysql")

module.exports.getuserInformation = (req, res) => {

    mysql.query("INSERT INTO `users`(`name`) VALUES ('sandeep');", (err, result) => {

        if (err) {
            console.log(err);
            return;
        }






    })

    return res.status(200).json({
        "title": "data inserted successfully",
    });

}

module.exports.clickLike = (req, res) => {

    return res.status(200).json({
        "title": "sandeep guptan",
    });


}