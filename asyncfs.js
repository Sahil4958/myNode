const fs = require("fs");

// const text = fs.readFile("./filess/file.txt", "utf-8", (err, text) => {
//   console.log(text);
// });

// console.log("India won the 2024 icc trophy");

fs.readFile("./filess/output.txt", "utf-8", (err1, data1) => {
  console.log(data1);
  fs.readFile(`./filess/${data1}.txt`, "utf-8", (err2, data2) => {
    console.log(data2);
    fs.readFile("./filess/sahil.txt", "utf-8", (err3, data3) => {
      console.log(data3);
      fs.writeFile(
        "./filess/file.txt",
        `${data2}\n\n${data3}\n\n New Date is ${new Date()}`,
        () => {
          console.log("file written sucessfully");
        }
      );
    });
  });
});

console.log("ok sahil you may proceed");
