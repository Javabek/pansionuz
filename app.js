console.log("web server started");
const express = require("express");
const app = express();

//calling mongoDb
const db = require("./server").db();
const mongodb = require("mongodb");

//kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//session code

//views code
app.set("views", "views");
app.set("view engine", "ejs");


//routing code

module.exports = app;