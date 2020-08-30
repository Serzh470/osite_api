const express = require("express");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");

const app = express();

const apiInstagramRouter = require("./routes/instagram");

app.use("/api/instagram", apiInstagramRouter);

module.exports = app;
