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

const options = {
  host: "jtooldb.cugcr.ca",
  db: "hackathon",
  max: 50,
  buffer: 10,
};

let pullFromEnv = ["user", "password", "host", "db"];

for (let key of pullFromEnv) {
  if (process.env.hasOwnProperty(key)) {
    options[key] = process.env[key];
  }
}

module.exports = require("rethinkdbdash")(options);
