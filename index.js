const fs = require("node:fs");
const fc = fs.readFileSync("./test.text", "utf8");
console.log(fc);
