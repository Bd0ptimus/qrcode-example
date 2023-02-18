const express = require("express");

const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const bodyParser = require("body-parser");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req,res) => {
    res.render('testroute');
});

app.listen(4000, () => {
  console.log("Serving on port 4000");
});
