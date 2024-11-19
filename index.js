const fs = require("node:fs");
const fileText = fs.readFileSync("./test.txt", "utf-8");
const file2 = fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
// console.log("====================================");
// console.log(fileText);
// console.log("====================================");
console.log("====================================");
console.log(Buffer.from("r").toJSON());
console.log("====================================");
