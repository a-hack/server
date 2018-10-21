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
const v1 = require('./v1');
const cors = require('./cors');
const router = express.Router();

router.get('/', function (req, res, next) {
	res.json({ routes: ['v1'] });
});

router.use(cors);
router.use('/v1', v1);

module.exports = router;
