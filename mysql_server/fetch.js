//module
const db_connection = require("./db_connection");
let connection = db_connection.getConnection();
connection.connect();
const express = require("express");
const fetch = express.Router();
fetch.get("/",(req,res)=>{
    connection.query(`select * from products`,
            (err,records,fields)=>{
        if(err) {
            res.send({"msg":"no product available"})
        }
        else{
            res.send(records);
        }
    });
});
module.exports = fetch;