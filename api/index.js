const express = require('express');
const layout = require('./layout');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({test: "value"});
});

router.use('/layout', layout);

module.exports = router;
