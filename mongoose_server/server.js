const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const insert = require("./insert");
app.use("/insert",insert);
const fetch = require("./fetch");
app.use("/fetch",fetch);
const update = require("./update");
app.use("/update",update);
const remove = require("./delete");
app.use("/delete",remove);
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});