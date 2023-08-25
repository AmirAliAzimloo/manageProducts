const http = require("http");
const ProductController = require("./controllers/product.controllers");
const ErrorHandler = require("./controllers/errorHandler.controller");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const apiRoute = "api";
  const productsRoute = `/${apiRoute}/products`;
  const singleProductRoute = `${productsRoute}/${/\/api\/products\/[0-9]+/}`;
  const { url, method } = req;

  if (url == productsRoute && method == "GET") {
    ProductController.get(req, res);
  } else if (url.match(singleProductRoute) && method == "GET") {
    ProductController.getById(req, res);
  } else if (url.match(productsRoute) && method == "POST") {
    ProductController.create(req, res);
  } else if (url.match(singleProductRoute) && method == "PUT") {
    ProductController.update(req, res);
  } else if (url.match(singleProductRoute) && method == "DELETE") {
    ProductController.remove(req, res);
  } else {
    ErrorHandler.notFound(res);
  }
  // other kind of content-type => text/html , application/json
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.end(req.url);
}); 

server.listen(PORT);
console.log(`server run on port ${PORT}  http://localhost:${PORT}`);
