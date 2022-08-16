require("dotenv").config();
const express = require("express");
const app = express("app");
const cors = require("cors");
const userRouter = require("./routes/auth/users");
const connectDB = require("./db/connect");

app.use(express.json({ limit: "20mb" }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  })
);

app.use("/api/auth", userRouter);
const PORT = process.env.PORT;

(() => connectDB(app, PORT))();
