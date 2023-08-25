const http = require("http");
const products = require('./data/products');
const ProductController = require("./controllers/product.controllers");

const PORT = 3000;   

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url == "/api/products") {
    ProductController.get(req,res)  
}else{
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({
        message:"Route Not Fount | 404"  
      }))
      res.end();
  }
  // other kind of content-type => text/html , application/json
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(req.url);
});

server.listen(PORT);
console.log(`server run on port ${PORT}  http://localhost:${PORT}`);
