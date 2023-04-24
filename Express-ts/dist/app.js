"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("This is Logging Middleware");
    next();
});
app.get("/cats/som", function (req, res, next) {
    console.log("This is Som Middleware");
    next();
});
app.get("/", function (req, res) {
    res.send({ cats: app_model_1.Cat });
});
app.get("/cats/blue", function (req, res, next) {
    res.send({ blue: app_model_1.Cat[0] });
});
app.get("/cats/som", function (req, res) {
    res.send({ som: app_model_1.Cat[1] });
});
app.use(function (req, res, next) {
    console.log("This is Logging Middleware");
    res.send({ error: "404 Not Found Error" });
});
app.listen(8000, function () {
    console.log("Server is on....");
});
//# sourceMappingURL=app.js.map