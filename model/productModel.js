const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const productModel = new Schema({
    phoneNumber: { type: String   },
    product: { type: String },
    quality: { type: String },
    price: { type:String },
})
module.exports = mongoose.model('product', productModel)