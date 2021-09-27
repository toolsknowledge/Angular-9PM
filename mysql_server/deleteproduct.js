const db_connection = require("./db_connection");
const connection = db_connection.getConnection();
connection.connect();
const remove = require("express").Router().delete("/",(req,res)=>{
    connection.query(`delete from products where p_name='${req.body.p_name}'`,(err,result)=>{
        if(err){
            res.send({"msg":"record not deleted successfully"});
        }else{
            res.send({"msg":"record deleted successfully"});
        }
    })
});
module.exports = remove;