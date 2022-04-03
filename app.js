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
  // console.log(req.params.url);
  // Get the req.route.path  and send that data forward to the viewer
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/Limitato_Slipin_DarkGreen_${req.params.url}.glb`;
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/${req.params.url}.glb`;
  // let ios_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/${req.params.url}.reality`;
  let src = `/picasso`;
  // let ios_src = `/picasso.usdz`;
  let button_text = req.query.text || "View In Ar";

  let size_1 = req.query.sizes_1;
  let size_2 = req.query.sizes_2;
  let size_3 = req.query.sizes_3;
  let size_4 = req.query.sizes_4;
  let size_5 = req.query.sizes_5;
  let size_6 = req.query.sizes_6;
  let size_7 = req.query.sizes_7;

  res.render("index", {
    root: __dirname,
    src: src,
    button_text: button_text,
    size_1: size_1,
    size_2: size_2,
    size_3: size_3,
    size_4: size_4,
    size_5: size_5,
    size_6: size_6,
    size_7: size_7,
  });
});
app.get("/:url", (req, res) => {
  // console.log(req.params.url);
  //  Get the req.route.path  and send that data forward to the viewer.
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/Limitato_Slipin_DarkGreen_${req.params.url}.glb`;
  let src = `/picasso`;
  let button_text = req.query.text;
  console.log(req.query);
  let sizeArray = [
    req.query.size_1,
    req.query.size_2,
    req.query.size_3,
    req.query.size_4,
    req.query.size_5,
    req.query.size_6,
    req.query.size_7,
  ];
  let sizes_used = [];

  sizeArray.map((size) => {
    if (size !== undefined) {
      sizes_used.push(size);
    }
  });

  console.log(sizes_used);

  res.render("index", {
    root: __dirname,
    src: src,
    button_text: button_text,
    sizes_used: sizes_used,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

app.use(express.static(__dirname + "/public"));
