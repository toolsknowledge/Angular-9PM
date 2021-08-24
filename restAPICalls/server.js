const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/restapi1",(req,res)=>{
    res.send({"msg":"rxjs"});
});


app.get("/restapi2/:msg",(req,res)=>{
    
    if(req.params.msg === "rxjs"){
        res.send({"msg":"custom example on mergeMap()"});
    }else{
        res.send("Bye");
    }
});


app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});

