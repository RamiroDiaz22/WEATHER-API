const express = require("express");
const morgan = require("morgan");
const cityRouter = require("./routes/cities.routes.js");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/city", cityRouter);

module.exports = app;
