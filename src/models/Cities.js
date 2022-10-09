const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    name: String,
    temp: Number,
    temp_min: Number,
    temp_max: Number,
    weather_icon: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Cities", citySchema);
