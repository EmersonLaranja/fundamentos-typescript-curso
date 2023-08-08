"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var app_js_1 = require("./src/app.js");
var port = process.env.PORT || 3000;
app_js_1.default.listen(port, function () {
    console.log("Servidor escutando em http://localhost:".concat(port));
});
