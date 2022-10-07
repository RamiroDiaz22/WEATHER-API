import { Router } from "express";
import { weatherData } from "../controllers/city.controllers.js";

const router = Router();

router.get("/", weatherData);

export default router;
