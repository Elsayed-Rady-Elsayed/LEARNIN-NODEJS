// const { pbkdf2 } = require("crypto");
// process.env.UV_THREADPOOL_SIZE = 4;
// const start = performance.now();
// pbkdf2("secret", "salt", 100000, 64, "sha512", () => {
//   console.log("end of function", performance.now() - start);
// });
// pbkdf2("secret", "salt", 100000, 64, "sha512", () => {
//   console.log("end of function", performance.now() - start);
// });
// pbkdf2("secret", "salt", 100000, 64, "sha512", () => {
//   console.log("end of function", performance.now() - start);
// });
// pbkdf2("secret", "salt", 100000, 64, "sha512", () => {
//   console.log("end of function", performance.now() - start);
// });
// pbkdf2("secret", "salt", 100000, 64, "sha512", () => {
//   console.log("end of function", performance.now() - start);
// });
// pbkdf2("secret", "salt", 100000, 64, "sha512", () => {
//   console.log("end of function", performance.now() - start);
// });
const http = require("node:http");
const server = http.createServer((req, res) => {
  res.end("hello world");
});
server.listen(3001, () => {
  console.log("listheinig on port 3001");
});
