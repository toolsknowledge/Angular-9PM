const db_properties = require("./db_properties");
const mysql = require("mysql");

const db_connection = {
    "getConnection" : ()=>{
        return mysql.createConnection(db_properties)
    }
};
module.exports = db_connection;