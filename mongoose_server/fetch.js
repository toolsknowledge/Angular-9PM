const mongoose = require("mongoose");
const express = require("express");
const Product = require("./model");
mongoose.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ngrx?retryWrites=true&w=majority");
const fetch = express.Router();
fetch.get("/",(req,res)=>{
    Product.find({},(err,records)=>{
        if(err) throw err;
        else{
            res.send(records);
        }
    });
});
module.exports = fetch;