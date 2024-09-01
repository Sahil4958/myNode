/* lec-1 readline from terminal*/

// const readline = require("readline");

// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r1.question("Please Enter the name of your favourite cricketer: ", (name) => {
//   console.log("Your fav crickrter is ", name);
//   r1.close();
// });

// r1.on("close", () => {
//   console.log("Interface closed");
//   process.exit(0);
// });
//-------------------------------------------------------------------------------------------------------------------

/* lec -2 read and write file  */

const fs = require("fs");

// let file = fs.readFileSync("./filess/file.txt", "utf8");
// console.log(file);

// let content = `Your content has been read from file.txt: ${file} . \nDate : ${new Date()}`;
// fs.writeFileSync("./filess/output.txt", content);

let writefile = `Sahil is the great learner according to dhiraj poojara . \nDate: :${new Date()}`;
fs.writeFileSync("./filess/output.txt", writefile);
