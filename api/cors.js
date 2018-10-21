const express = require("express");

module.exports = function cors(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", req.get("Access-Control-Request-Headers"));
    next();
};