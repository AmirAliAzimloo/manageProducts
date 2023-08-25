const http = require("http");
const products = require("./data/products");
const ProductController = require("./controllers/product.controllers");
const ErrorHandler = require("./controllers/errorHandler.controller");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // console.log(req.method);
  if (req.url == "/api/products" && req.method == "GET") {
    ProductController.get(req, res);
  } else if (req.url.match(/\/api\/products\/[0-9]+/) && req.method == "GET") {
    ProductController.getById(req, res);
  } else if (req.url.match("/api/products") && req.method == "POST") {
    ProductController.create(req, res);
  } else {
    ErrorHandler.notFound(res);
  }
  // other kind of content-type => text/html , application/json
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.end(req.url);
});

server.listen(PORT);
console.log(`server run on port ${PORT}  http://localhost:${PORT}`);
