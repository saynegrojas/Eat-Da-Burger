const connection = require('./connection.js');

const printQuestionMarks = (num) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

const objToSql = (ob) => {
    let arr = [];

    for (let key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

const orm = {
    //get data
    all: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    //create
    create: function (table, cols, vals, cb) {
        
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    //update
    update: function (table, objColVals, condition, cb) {
        
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString,(err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

//export orm
module.exports = orm;
