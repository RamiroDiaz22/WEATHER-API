const express = require("express");
const weatherData = require("../controllers/city.controllers.js");
const fakeError = require("../middlewares/fakeError.js");
const delayTime = require("../middlewares/delayTime.js");

const router = express.Router();

router.get("/", fakeError, weatherData, delayTime);

module.exports = router;
