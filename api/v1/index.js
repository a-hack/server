const express = require('express');
const router = express.Router();

const layout = require('./layout');

router.get('/', function (req, res, next) {
	res.json({ routes: ['layout'] });
});

router.use('/layout', layout);

module.exports = router;
