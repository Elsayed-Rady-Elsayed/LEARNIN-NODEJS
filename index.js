const { pbkdf2 } = require("crypto");
const start = performance.now();
pbkdf2("secret", "salt", 100000, 64, "sha512", () => {});
console.log("end of function", performance.now() - start);
