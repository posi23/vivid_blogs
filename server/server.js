"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var routes_1 = require("./app/routes");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json()); //to parse requests of content type - application/json
app.use(body_parser_1.default.urlencoded({ extended: true })); //parse requests of content-type - application/x-www-form-urlencoded
app.use("/", routes_1.default);
// send back a 404 error for any unknown api request
app.use(function (req, res, next) {
    res.status(404).send({ error: "Route not found" });
    next();
});
// Port that listens for requests
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT, "."));
});
