const express = require("express");

module.exports = function cors(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Headers", req.getHeader("Access-Control-Request-Headers"));
    next();
};