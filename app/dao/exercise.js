const queryHelper = require('./helper/queryHelper');

const getAll = (req, res, next) => {
    queryHelper.query('select * from Exercise')
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
};

const insert = (req, res, next) => {
    var sqlStatement = `insert into Exercise (Name,Description) values ('${req.body.name}', '${req.body.description}');`;
    sqlStatement += 'select @@IDENTITY as Id';
    queryHelper.query(sqlStatement)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
};

const update = (req, res, next) => {
    var sqlStatement = 'update Exercise'
    sqlStatement += ` set name = '${req.body.name}',`;
    sqlStatement += ` description = '${req.body.description}')`;
    sqlStatement += ` where id = ${req.params.id};`;

    queryHelper.query(sqlStatement)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            next(err);
        })
};

const remove = (req, res, next) => {
    var sqlStatement = `delete from Exercise where id = ${req.params.id};`;

    queryHelper.query(sqlStatement)
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            next(err);
        })
};

module.exports = {
    getAll: getAll,
    insert: insert,
    update: update,
    remove: remove
};