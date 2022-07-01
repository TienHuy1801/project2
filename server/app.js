import express, { json } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import getRoutes from "./routes/index.js";

config();
const app = express();

app.use(cors());
app.use(json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use("/", getRoutes);

mongoose.connect(process.env.MONGODB_URL)
  .then((result) => {
    console.log("Localhost 8080");
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
