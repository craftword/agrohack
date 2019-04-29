const express = require('express')
const productRouter = express.Router()
const Product = require('../model/productModel');


productRouter.get('/', (req, res) => {
    console.log('hello boy')
    Product.find({}, (err, products) => {
         if(err)
            res.status(500).send(err)
        else 
            res.json(products)
    })
})
productRouter.use('/:id', (req, res, next) => {
    console.log(req.params.id)
    Product.findById(req.params.id, (err, product) => {
        console.log(product)
        if(err)
            res.status(500).send(err)
        else 
            req.product = product 
            next()
    })
})
productRouter
    .get('/:id', (req, res) => {
        return res.json( req.product )
    })
    .put('/:id', (req, res) =>{
        
        Object.keys(req.body).map(key=>{
            req.product[key] = req.body[key]
        })
        req.product.save()
        res.json(req.product)
    })
module.exports = productRouter;
