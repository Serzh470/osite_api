const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");

const app = express();

// parsing request data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Allow requests only from locahost in development and requests from user web page
if (!process.env.NODE_ENV === "development" & process.env.USER_HOST) {
    app.use(cors({ origin: process.env.USER_HOST }));
}

const apiInstagramRouter = require("./routes/instagram");

app.use("/api/instagram", apiInstagramRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // send the error
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
