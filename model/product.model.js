const products = require('../data/products');

async function find(){
    return new Promise((resolve,reject)=>{
        resolve(products)
    })
}
async function findById(id){ 
    return new Promise((resolve,reject)=>{
        resolve(products.find(product=>product.id == id))
    })
}
async function create(product){
    return new Promise((resolve,reject)=>{
        products.push(product)
        // fs
        resolve()
    })
}

const ProductModel = {
    find,
    findById,
    create
}

module.exports = ProductModel
