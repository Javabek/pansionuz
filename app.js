console.log("web server started");
const express = require("express");
const app = express();
const router = require("./router.js");
const router_bssr = require("./router_bssr.js");

//kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//session code

//views code
app.set("views", "views");
app.set("view engine", "ejs");


//routing code
app.use("/resto", router_bssr);
app.use("/", router);

module.exports = app;