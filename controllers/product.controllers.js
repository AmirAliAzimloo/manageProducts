const ProductModel = require("../model/product.model");

async function get(req,res){
    try {
        const products = await ProductModel.find()
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(products))
        res.end();
    } catch (error) {
        
    }
}

const ProductController = {
    get
}

module.exports = ProductController