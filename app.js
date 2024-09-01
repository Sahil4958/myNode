//Core modules
const http = require("http");
const fs = require("fs");
const url = require("url");
const events = require("events");
const user = require("./modules/user");
const PORT = 3000;
const replaceHtml = require("./modules/replaceHtml");
const { log } = require("util");

const html = fs.readFileSync("./Templates/index.html", "utf-8");
let products = JSON.parse(fs.readFileSync("./Data/products.json", "utf-8"));
let productListHtml = fs.readFileSync(
  "./Templates/products-list.html",
  "utf-8"
);
let productDetailsHtml = fs.readFileSync(
  "./Templates/product-details.html",
  "utf-8"
);

// function replaceHtml(template, product) {
//   let output = template.replace("{{%IMAGE%}}", product.productImage);
//   output = output.replace("{{%NAME%}}", product.name);
//   output = output.replace("{{%MODELNAME%}}", product.modeName);
//   output = output.replace("{{%MODELNUMBER%}}", product.modelNumber);
//   output = output.replace("{{%SIZE%}}", product.size);
//   output = output.replace("{{%CAMERA%}}", product.camera);
//   output = output.replace("{{%%COLOR}}", product.color);
//   output = output.replace("{{%PRICE%}}", product.price);
//   output = output.replace("{{%ID%}}", product.id);
//   output = output.replace("{{%ROM%}}", product.rom);
//   output = output.replace("{{%DESC%}}", product.Description);
//   return output;
// }

const server = http.createServer((req, res) => {
  let { query, pathname: path } = url.parse(req.url, true);
  // console.log(s);
  // let path = req.url;
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Steven Smith",
    });
    res.end(html.replace("{{%CONTENT%}}", "This is home page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Sam Curran",
    });
    res.end(html.replace("{{%CONTENT%}}", "You are in Contact page"));
  } else if (path.toLocaleLowerCase() === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Jack fraser",
    });
    res.end(html.replace("{{%CONTENT%}}", "You are in About page"));
  } else if (path.toLocaleLowerCase() === "/products") {
    if (!query.id) {
      let productHtmlArray = products.map((prod) => {
        return replaceHtml(productListHtml, prod);
      });
      let productReplaceHtml = html.replace(
        "{{%CONTENT%}}",
        productHtmlArray.join(",")
      );
      res.writeHead(200, { "Content-Type": "text/html" });
      // console.log(products);
      res.end(productReplaceHtml);
    } else {
      let prod = products[query.id];
      let productDetailsResponseHtml = replaceHtml(productDetailsHtml, prod);
      res.end(html.replace("{{%CONTENT%}}", productDetailsResponseHtml));
    }
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-header": "Iftkhar ahmed",
    });

    res.end(html.replace("{{%CONTENT%}}", "Page is not found : 404"));
  }
});

server.listen(PORT, () => {
  console.log(`Server has been startrd at http://localhost:${PORT}`);
});

// Emmiting and hadaling custom event



let myEmitter = new user();

myEmitter.on("userCreated", (id, name) => {
  console.log(`A new user ${name} with id ${id} is created... `);
});

myEmitter.on("userCreated", (id, name) => {
  console.log(`A new user${name} with id ${id} has been added in database...`);
});

myEmitter.emit("userCreated", 58, "sam curran");
