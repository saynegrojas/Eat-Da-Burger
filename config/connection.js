//mysql package
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "yuhcmnycnlgx84ar",
    password: process.env.password,
    database: "n53qk9en3qb9s69k"
});

//connect
connection.connect( (err) => {
    if(err) throw err;
    console.log(`connected as id: ${connection.threadId}`);
});

//export connection
module.exports = connection;