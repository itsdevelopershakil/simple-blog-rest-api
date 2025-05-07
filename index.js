import cors from "cors";
import dotenv from "dotenv";
import express from "express";

// app instance
const app = express();

// env file config
dotenv.config();

// middlewares config
const middlewares = [cors(), express.json(), express.urlencoded()];

app.use(middlewares);

// routing
const apiEndPoint = "/v1";
app.get(apiEndPoint + "/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(process.env.PORT, (err) => {
  if (!err) {
    console.log(`Server is Running at ${process.env.PORT} Port!!!`);
  }
});
