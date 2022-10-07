import { Router } from "express";
import { weatherData } from "../controllers/city.controllers.js";
import { fakeError } from "../middlewares/fakeError.js";
import { delayTime } from "../middlewares/delayTime.js";

const router = Router();

router.get("/", [fakeError, delayTime], weatherData, delayTime);

export default router;
