const fs = require("fs");
//Event loop

// console.log("Program has been started");

//1)Stored into First Phase

// setTimeout(() => {
//   console.log("Timer Call back executed");
// }, 0);

// //2) Stored into Second Phase
// fs.readFile("./filess/file.txt", () => {
//   console.log("file read completed");
// });

// //3)Stored into  Third phase
// setImmediate(() => {
//   console.log("setImmediate call back executed");
// });

// console.log("Program has been ended");

////////////////////////////////////////////////

console.log("Program has been started");

//2) Stored into Second Phase
fs.readFile("./filess/file.txt", () => {
  console.log("file read completed");
  //1)Stored into First Phase

  setTimeout(() => {
    console.log("Timer Call back executed");
  }, 0);

  //3)Stored into  Third phase
  setImmediate(() => {
    console.log("setImmediate call back executed");
  });

  process.nextTick(() => {
    console.log("Process.nextTick  executed");
  });
});

console.log("Program has been ended");
