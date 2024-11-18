const fs = require("node:fs");
const fc = fs.readFileSync("./test.text", "utf8");
console.log(fc);
console.log(__filename);
console.log(__dirname);
const s = require("./module");
// delete require.cache["filename"];
s.sum(1, 2);
