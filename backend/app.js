import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import product from "./routes/ProductRoute.js"

const app=express();
const __dirname = path.resolve();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1",product)


app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

export default app;