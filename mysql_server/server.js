const fetch = require("./fetch");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/fetch",fetch);

const insert = require("./addproduct");
app.use("/insert",insert);

const update = require("./updateproduct");
app.use("/update",update)

const remove = require("./deleteproduct");
app.use("/delete",remove);


app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});

