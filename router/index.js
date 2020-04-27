const express = require("express");
const router = express.Router();

const Controller = require("../controller/home_controller")

router.get("/",Controller.indexPage)



module.exports = router;
