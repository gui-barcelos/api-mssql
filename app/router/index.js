'use strict';

const exercise = require('./routes/exercise');
let Router = require('express').Router();

module.exports = (app) => {
    exercise(Router);

    app.use('/api', Router);
    app.use('/api', (err, req, res, next) => {
        res.status(err.status || 500);
        res.send({
            message: err.message
        });
    });
};

