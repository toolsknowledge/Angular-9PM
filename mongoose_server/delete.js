const mongoose = require("mongoose");
const express = require("express");
const Product = require("./model");
mongoose.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ngrx?retryWrites=true&w=majority");
const remove = express.Router();
remove.delete("/",(req,res)=>{
    Product.deleteOne({"p_name":req.body.p_name},(err)=>{
        if(err) throw err;
        else{
            res.send({"msg":"record deleted successfully !!!"});
        }
    });
});
module.exports = remove;