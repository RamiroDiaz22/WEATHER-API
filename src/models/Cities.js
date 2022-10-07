import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: String,
  temp: Number,
});

export default mongoose.model("Cities", citySchema);
