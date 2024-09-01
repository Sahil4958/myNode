const http = require("http");
const fs = require("fs");
const events = require("events");

const PORT = 9000;

const server = http.createServer();

server.listen(PORT, () => {
  console.log(`Your server has been started at http://localhost:${PORT}`);
});

//Understaning streams

// solution-1 Without readable and writable stream

// server.on("request", (req, res) => {
//   fs.readFile("./filess/sample.txt", (err, data) => {
//     if (err) {
//       res.end("Something went wrong");
//       return;
//     } else {
//       res.end(data);
//     }
//   });
// });

//solution 2

// server.on("request", (req, res) => {
//   let rs = fs.createReadStream("./filess/sample.txt");
//   rs.on("data", (chunk) => {
//     //--> res.write is for chunk data piece by piece we can't take first res.end because it execute at the end not while chunk data is remainuing
//     res.write(chunk);
//     res.end();
//   });
//   rs.on("error", (error) => {
//     res.end(error.message);
//   });
// });

//solution  3 Using pipe() method
//pipe method is use to make fast of writing process in response
//pipe method is just use for reasStream
//it is for release backpressure
//pipe(writeble destination)

server.on("request", (req, res) => {
  let rs = fs.createReadStream("./filess/sample.txt");
  rs.pipe(res);
});
