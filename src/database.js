const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/weatherdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.log(error));
