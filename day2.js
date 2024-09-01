const http = require("http");
const fs = require("fs");
const PORT = 3000;

const html = fs.readFileSync("./Templates/index.html", "utf-8");
let products = JSON.parse(fs.readFileSync("./Data/products.json", "utf-8"));
let productListHtml = fs.readFileSync(
  "./Templates/products-list.html",
  "utf-8"
);

let productHtmlArray = products.map((prod) => {
  let output = productListHtml.replace("{{%IMAGE%}}", prod.productImage);
  output = output.replace("{{%NAME%}}", prod.name);
  output = output.replace("{{%MODELNAME%}}", prod.modeName);
  output = output.replace("{{%MODELNUMBER%}}", prod.modelNumber);
  output = output.replace("{{%SIZE%}}", prod.size);
  output = output.replace("{{%CAMERA%}}", prod.camera);
  output = output.replace("{{%%COLOR}}", prod.color);
  output = output.replace("{{%PRICE%}}", prod.price);

  return output;
});

const server = http.createServer((req, res) => {
  let path = req.url;
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
    let productReplaceHtml = html.replace(
      "{{%CONTENT%}}",
      productHtmlArray.join(",")
    );
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log(products);
    res.end(productReplaceHtml);
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
