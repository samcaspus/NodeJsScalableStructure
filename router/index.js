const express = require("express");
const router = express.Router();


const homePageController = require("../controller/homepage_controller");


router.get("/", homePageController.getuserInformation);
router.get("/sandeep", homePageController.clickLike);



module.exports = router;
