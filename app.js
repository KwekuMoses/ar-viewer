const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const path = require("path");

var cors = require("cors");

app.use(express.static("public"));

app.use(cors());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log(req.params.url);
  // Get the req.route.path  and send that data forward to the viewer
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/Limitato_Slipin_DarkGreen_${req.params.url}.glb`;
  let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/${req.params.url}.glb`;
  let ios_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/${req.params.url}.reality`;
  res.render("index", {
    root: __dirname,
    android_src: android_src,
    ios_src: ios_src,
  });
});
app.get("/:url", (req, res) => {
  console.log(req.params.url);
  //  Get the req.route.path  and send that data forward to the viewer.
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/Limitato_Slipin_DarkGreen_${req.params.url}.glb`;
  let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/${req.params.url}.glb`;
  let ios_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/${req.params.url}.reality`;
  let button_text = req.query.text;

  res.render("index", {
    root: __dirname,
    android_src: android_src,
    ios_src: ios_src,
    button_text: button_text,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
