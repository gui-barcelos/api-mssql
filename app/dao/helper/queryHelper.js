const db = require('../../config/db');
const sql = require('mssql');

const query = (text) => {
    return new Promise((res, rej) => {
        sql.connect(db, (err) => {
            if (err) {
                console.log(err);
                return rej(Error('Error connecting do database'));
            }

            let request = new sql.Request()

            request.query(text, (err, recordSet) => {
                if (err) { 
                    console.log(err);
                    return rej(Error('Error executing query'));
                }

                return res(recordSet);
            })
        });
    });
};

module.exports = {
    query: query
};