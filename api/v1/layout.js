const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const r = require("../../db");

router.get('/', function (req, res, next) {
	res.json({ routes: [] });
});

router.get('/:id', function (req, res, next) {
	r.table("layout").get(req.params.id).run().then((result) => {
		if (result) {
			return res.json(result.layout);
		} else {
			return res.status(404).json({ error: "Not Found"})
		}

	}).catch(error => {
		console.error(error);
		res.status(500).json({ error: error.message });
	});
});

router.post('/', function (req, res, next) {
	console.log(req.body);
	const id = crypto.createHmac('sha256', JSON.stringify(req.body))
		.digest('base64');
	const layout = { id, layout: req.body };
	r.table("layout").insert(layout).run().then(result => {
		return res.json(layout);
	}).catch(error => {
		res.error(error);
	});
});

module.exports = router;
