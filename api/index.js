const express = require('express');
const v1 = require('./v1');
const cors = require('./cors');
const router = express.Router();

router.get('/', function (req, res, next) {
	res.json({ routes: ['v1'] });
});

router.use(cors);
router.use('/v1', v1);

module.exports = router;
