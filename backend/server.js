import app from "./app.js";

import connectDatabase from "./config/connect.js";


connectDatabase();

const server=app.listen(4000,()=>{
    console.log("server listening on port " + 4000)
})


process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server due to Unhandled promise  Rejection");

  server.close(() => {
    process.exit(1);
  });
});
