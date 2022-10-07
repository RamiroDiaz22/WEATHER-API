import express from "express";
import morgan from "morgan";
import cityRouter from "./routes/cities.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/", cityRouter);

export default app;
