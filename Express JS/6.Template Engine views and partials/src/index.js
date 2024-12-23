const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const requests = require("requests")

// console.log( path.join(__dirname,"../public"))
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.set("view engine", "hbs");

// renaming the views directory to templates
const viewDir = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.set("views", viewDir);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index.hbs", {
    MyName: "Rajesh",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/apipage", (req, res) => {
  requests(`http://api.openweathermap.org/data/2.5/weather?q=pune&appid=c13bb5e42a35f637a83cabfe8879f117`)
    .on("data", function (chunk) {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        console.log(arrData)
        console.log(`The city name is ${arrData[0].name}`)
        res.write(arrData[0].name)
    })
    .on("end", function (err) {
      if (err) return console.log("connection closed due to errors", err);

      console.log("end");
    });
    // res.render("apipage")
});

app.get("/about/*", (req, res) => {
  res.render("404error", {
    message: "About Under Page is not found ...",
  });
});

app.get("*", (req, res) => {
  res.render("404error", {
    message: "Page is Not FOUND",
  }); // select all the pages with is not routed and render here
});

app.listen(8000, () => {
  console.log("server is listning at port 8000");
});
