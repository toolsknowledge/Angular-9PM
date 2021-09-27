const db_connection = require("./db_connection");
const connection = db_connection.getConnection();
connection.connect();
const update = require("express").Router();

update.put("/",(req,res)=>{ 
    connection.query(`update products set p_cost=${req.body.p_cost} where p_name='${req.body.p_name}'`,(err,result)=>{
        if(err){
            res.send({"msg":"update fail"});
        }else{
            res.send({"msg":"record updated successfully !!!"});
        }
    });
});


module.exports = update;
