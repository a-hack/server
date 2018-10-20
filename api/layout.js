const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const r = require("../db");

/* GET users listing. */
router.get('/:id', function (req, res, next) {
	r.table("layout").get(req.params.id).run().then(({ layout }) => {
		return res.json(layout);
	}).catch(error => {
		res.error(error);
	});
});

/* GET users listing. */
router.post('/', function (req, res, next) {
	console.log(req.body);
	const id = crypto.createHmac('sha256', JSON.stringify(req.body))
		.digest('base64');
	const layout = { id, layout: req.body };
	r.table("layout").insert(layout).run().then(layout => {
		return res.json(layout);
	}).catch(error => {
		res.error(error);
	});
});

module.exports = router;
