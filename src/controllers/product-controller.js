const productDBA=require('../knex').Product;
const knex = require('../knex/knex');
const uuidv1 = require('uuid/v1');
const responseHandler=require('../utils/responsehandler');

exports.getProductDetails=(req,res)=>{
    const id=req.params.id;
    return productDBA.findOne({"id":id})
        .then(productDBAResponse=>{
            console.log(productDBAResponse);
            res.send(productDBAResponse);
        })
        .catch(err=>{
            console.log(err);
            responseHandler.errorResponse(req,res,'Internal server error',500);
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
            responseHandler.errorResponse(req,res,'Internal server error',500);
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
            responseHandler.errorResponse(req,res,'Internal server error',500);
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
            responseHandler.errorResponse(req,res,'Internal server error',500);
        })
}

exports.removeProduct=(req,res)=>{
    const userIds=req.params.id.split(',');
    return knex('product')
     .whereIn('id',userIds)
     .del()
     .then(deleteResponse=>{
         res.send({message:"Deleted sucessfully"});
     })
     .catch(err=>{
         console.log(err)
         responseHandler.errorResponse(req,res,'Internal server error',500);
     })
}