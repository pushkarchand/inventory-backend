const productDBA=require('../knex').Product;
const knex = require('../knex/knex');
const uuidv1 = require('uuid/v1');

exports.getProductDetails=(req,res)=>{
    const id=req.params.id;
    return productDBA.findOne({"id":id})
        .then(productDBAResponse=>{
            console.log(productDBAResponse);
            res.send(productDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            res.send(err);
        })
}


exports.updateProduct=(req,res)=>{
    return productDBA.update({"id":1})
        .then(productDBAResponse=>{
            console.log(productDBAResponse);
            res.send(productDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            res.send(err);
        })
}


exports.createProduct=(req,res)=>{
    const product=req.body;
    product.id=uuidv1();
    delete product.created_at;
    delete product.updated_at;
    return productDBA.create(product)
        .then(productDBAResponse=>{
            console.log(productDBAResponse);
            res.send(productDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            res.send(err);
        })
}

exports.enumerateProducts=(req,res)=>{
    return productDBA.find()
        .then(productDBAResponse=>{
            console.log(productDBAResponse);
            res.send(productDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            res.send(err);
        })
}

exports.removeProduct=(req,res)=>{
    const userIds=req.query.id.split(',');
    return knex('product')
     .whereIn('id', userIds)
     .del()
     .then(deleteResponse=>{
         res.send(deleteResponse);
     })
     .catch(err=>{
         console.log(err)
         res.send(err);
     })
}