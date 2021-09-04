const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/products",(req,res)=>{
    res.send([{"p_cost":10000},
                {"p_cost":20000},
                {"p_cost":30000},
                {"p_cost":40000},
                {"p_cost":50000}]);
});

app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});