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
