const app = require("./app");
// set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
