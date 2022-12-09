var mysql = require('mysql');


var connection = mysql.createConnection({
    host:"localhost",user:"root",password:"",database:"login",port: 3306,
    multipleStatements: true
});

module.exports = connection
