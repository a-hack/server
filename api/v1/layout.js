/**
 * A customizable data visualization web application.
 * Copyright (C) 2018  Jacob MacDonald, Jacob Martin, Patrick Gingras,
 * Michael Dysart, Aweys Ahmed, Hassan Salami, Aritz Joseph Beobide-Cardinal
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

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
		res.status(500).json({ error: error.message });
	});
});

router.post('/', function (req, res, next) {
	console.log(req.body);
	const id = crypto.createHmac('sha256', JSON.stringify(req.body))
		.digest('base64').replace(/\//g, "_").replace(/\+/g, "-");
	const layout = { id, layout: req.body };
	r.table("layout").insert(layout).run().then(result => {
		return res.json(layout);
	}).catch(error => {
		res.error(error);
	});
});

module.exports = router;
