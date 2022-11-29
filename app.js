"use strict";

const express = require("express");
const ejs = require("ejs");

const app = express();
const home = require(__dirname + "/app/src/routes");

app.set("views", __dirname + "/app/src/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.static(__dirname + "/app/src/public"));
app.use("/", home);

module.exports = app;
