const products = require('../data/products');
const fs = require('fs');

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

        // process.cwd() start project address => server.js

        fs.writeFile(`${process.cwd()}/data/products.json`,JSON.stringify(products),(error)=>{
            if(error){
                reject(error)
            }else{
                resolve({message:"new product created",data:product})
            }
        } 
        )
       
    })
}

const ProductModel = {
    find,
    findById,
    create
}

module.exports = ProductModel
