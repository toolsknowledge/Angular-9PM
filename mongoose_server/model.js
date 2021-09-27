const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    "p_name":{type:String,required:true},
    "p_cost":{type:Number,required:true},
    "rating":{type:Number,required:true},
    "image":{type:String,required:true}
},{timestamps:true});
const Product = mongoose.model("Product",productSchema);
module.exports = Product;