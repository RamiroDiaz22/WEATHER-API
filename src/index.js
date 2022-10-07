import app from "./app.js";

async function main() {
  try {
    app.listen(4000);
    console.log("Server is listerning on port: ", 4000);
  } catch (error) {
    console.error("Unable to connect to the database ", error);
  }
}

main();
