const express = require("express");

module.exports = function cors(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        res.setHeader("Access-Control-Allow-Headers", req.get("Access-Control-Request-Headers") || "*");
    } catch (error) {
        console.error(error)
    }
    next();
};