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
// const http = require("node:http");
// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("home page");
//   } else if (req.url == "/about") {
//     res.end("about page");
//   } else {
//     res.end("not found");
//   }

//   //   res.end("hello world");
// });
// server.listen(3001, () => {
//   console.log("listheinig on port 3001");
// });

const http = require("node:http");
const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end();
});
server.listen(3001, "localhost", () => {
  console.log("working on port:3001");
});
