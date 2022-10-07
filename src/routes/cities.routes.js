import { Router } from "express";
import { weatherData } from "../controllers/city.controllers.js";
import { fakeError } from "../middlewares/fakeError.js";

const router = Router();

router.get("/", fakeError, weatherData);

export default router;
