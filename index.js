const express = require("express");
const axios = require("axios");

const app = express();

const key = "2d7dcf1938de40ba82a915a17aaf3d9a";
const baseUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  axios
    .get(baseUrl)
    .then(function (response) {
      let articles = response.data.articles;

      res.render("index",{articles:articles});
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});

});

app.listen(3000, function () {
  console.log("listening 3000");
});
