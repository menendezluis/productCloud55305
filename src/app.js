import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import __dirname from "./utils.js";

import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";
import handlebars from "express-handlebars";
import config from "./config/index.js";

const app = express();
const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cookieParser());
//Template engine
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("welcome", { title: "AdoptMe" });
});
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
