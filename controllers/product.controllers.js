const ProductModel = require("../model/product.model");

async function get(req, res) {
  try {
    const products = await ProductModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log(error)
  }
}

async function getById(req, res) {
  try {
    // const [,,,id] = req.url.split("/")
    const id = req.url.split("/")[3];
    const product = await ProductModel.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "Product Not Found" }));
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(product));
      res.end();
    }
  } catch (error) {
    console.log(error)
  }
}

async function create(req, res) {
  try {
    await ProductModel.create(
      {
        id: Date.now(),
        name:"test for post",
        price:123
      }
    );
    res.writeHead(201, { "Content-Type": "application/json" });
    res.write(JSON.stringify({message:"Products created successfully"}));
    res.end();
  } catch (error) {
    console.log(error)
  }
}


const ProductController = {
  get,
  getById,
  create
};

module.exports = ProductController;
