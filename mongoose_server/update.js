const mongoose = require("mongoose");
const express = require("express");
const Product = require("./model");
mongoose.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ngrx?retryWrites=true&w=majority");
const update = express.Router();
update.put("/",(req,res)=>{
    Product.updateOne({"p_name":req.body.p_name},{$set:{"p_cost":req.body.p_cost}},(err,result)=>{
        if(err) throw err;
        else{
            res.send({"msg":"record updated successfully !!!"});
        }
    });
});
module.exports = update;