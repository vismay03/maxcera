const mongoose = require('mongoose');

const productSchema = new mongoose.Schema ({
    category: { type: String},
    image: {},
    name:  String ,
    model:  String,
    size:  String
},{
    collection: "products"
});
const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
