const db_connection = require("./db_connection");
const connection  = db_connection.getConnection();
connection.connect();

const express = require("express");
const insert = express.Router();

insert.post("/",(req,res)=>{
    connection.query(`insert into products values('${req.body.p_name}',${req.body.p_cost},${req.body.rating},'${req.body.image}')`,(err,result)=>{
        if(err){
            res.send({"msg":"Error"});
        }else{
            res.send({"msg":"record inserted successfully"});
        }
    });
});

module.exports = insert;