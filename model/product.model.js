const products = require('../data/products');

async function find(){
    return new Promise((reolve,reject)=>{
        reolve(products)
    })
}

const ProductModel = {
    find
}

module.exports = ProductModel
