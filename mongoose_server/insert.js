const mongoose = require("mongoose");
const express = require("express");
const Product = require("./model");
mongoose.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ngrx?retryWrites=true&w=majority");
const insert = express.Router();
insert.post("/",(req,res)=>{
    let newRecord = new Product({
        "p_name":req.body.p_name,
        "p_cost":req.body.p_cost,
        "rating":req.body.rating,
        "image":req.body.image
    });
    newRecord.save((err,Product)=>{
        if(err){
            res.send({"msg":"record not saved successfully !!!"});
        }else{
            res.send({"msg":"record inserted successfully !!!"});
        }
    });
});
module.exports = insert;